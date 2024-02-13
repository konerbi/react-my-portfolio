import { IconName } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TSlogo from '../components/TSlogo';
import { TrackGoogleAnalyticsEvent } from '../services/GA';
import CreateTextHtml from '../utils/CreateTextHtml';
import ScrollElementToContent from '../utils/ScrollElement';
import ScrollToElement from '../utils/ScrollToElement';
import Slideshow from './Slideshow';

interface PortfolioItemProps {
  id: string;
  technologies: string[] | IconName[];
  commercial?: boolean;
  collaborateCompany?: string;
  collaborateCompanyUrl?: string;
  description?: string;
  referenceUrl?: string;
  sourceCodeUrl?: string;
  images?: string[];
}

const PortfolioItem = (props: PortfolioItemProps) => {
  const [t, i18n] = useTranslation('common');
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isSlideshowVisible, setIsSlideshowVisible] = useState(false);

  function handleToggleInfo() {
    TrackGoogleAnalyticsEvent('togglePortfolioInfo', props.id + '_' + !isDescriptionVisible);

    setIsDescriptionVisible(!isDescriptionVisible);

    if (!isDescriptionVisible) {
      ScrollElementToContent('portfolio-container', `description-container-${props.id}`);
    } else {
      ScrollToElement('portfolio-container', `portfolio-item-container-${props.id}`);
    }
  }

  function handleLinkButton(url: string | undefined) {
    TrackGoogleAnalyticsEvent('buttonLinkClicked', props.id + '_' + url);
    window.open(url, '_blank');
  }

  function handleToggleSlideshow() {
    TrackGoogleAnalyticsEvent('portfolioToggleSlideshow', props.id + '_' + !isSlideshowVisible);
    setIsSlideshowVisible(!isSlideshowVisible);
  }

  return (
    <div id={`portfolio-item-container-${props.id}`} className={'portfolio-item-container'}>
      <div className={'project-view-container'}>
        <div className={'image-container'}>
          <div
            className={`image-placeholder ${!isSlideshowVisible ? 'show' : 'hide'}`}
            onMouseEnter={() => handleToggleSlideshow()}
          >
            <img
              src={props.images ? `src/assets/images/portfolio/${props.id}/${props.images[0]}` : ''}
            />
          </div>
          <div
            onMouseLeave={() => handleToggleSlideshow()}
            className={`slideshow-container ${isSlideshowVisible ? 'show' : 'hide'}`}
          >
            <Slideshow id={props.id} slides={props.images ? props.images : []} />
          </div>
        </div>

        <div className={'buttons-container'}>
          <button
            className={`portfolio-button ${props.commercial ? 'show' : 'hide'}`}
            disabled={props.referenceUrl ? false : true}
            onClick={() => handleLinkButton(props.referenceUrl)}
          >
            {t('portfolioItem.buttons.references')}
          </button>
          <button
            className={`portfolio-button ${!props.commercial ? 'show' : 'hide'}`}
            disabled={props.referenceUrl ? false : true}
            onClick={() => handleLinkButton(props.referenceUrl)}
          >
            {t('portfolioItem.buttons.see')}
          </button>
          <button
            className={`portfolio-button ${!props.commercial ? 'show' : 'hide'}`}
            disabled={props.sourceCodeUrl ? false : true}
            onClick={() => handleLinkButton(props.sourceCodeUrl)}
          >
            {t('portfolioItem.buttons.github')}
          </button>
        </div>
      </div>
      <div className={`project-header-container`}>
        <h1>{t(`portfolioItem.projects.${props.id}.title`)}</h1>
        <div className={'info-button-container'}>
          <FontAwesomeIcon
            className={'info-button'}
            icon={faInfoCircle}
            onClick={() => handleToggleInfo()}
          />
        </div>
      </div>
      <div className={'portfolio-technologies-container'}>
        {props.technologies.map((value: string | IconName, index: number) => {
          return value === 'typescript' ? (
            <TSlogo key={`tech-icon-${props.id}-${index}`} className={'tech-icon'} />
          ) : (
            <FontAwesomeIcon
              className={'tech-icon'}
              key={`tech-icon-${props.id}-${index}`}
              icon={['fab', value as IconName]}
            />
          );
        })}
      </div>
      <p
        dangerouslySetInnerHTML={
          props.commercial
            ? CreateTextHtml(
                t('portfolioItem.commercialText', {
                  collaborateCompany: props.collaborateCompany,
                  collaborateCompanyUrl: props.collaborateCompanyUrl,
                })
              )
            : CreateTextHtml('')
        }
      ></p>
      <div className={`description-container ${isDescriptionVisible ? 'show' : 'hide'}`}>
        <p
          id={`description-container-${props.id}`}
          dangerouslySetInnerHTML={CreateTextHtml(
            t(`portfolioItem.projects.${props.id}.description`)
          )}
        ></p>
      </div>
    </div>
  );
};

export default PortfolioItem;
