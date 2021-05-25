import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TSlogo from "../components/TSlogo";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { IconName } from "@fortawesome/free-brands-svg-icons";
import CreateTextHtml from "../utils/CreateTextHtml";
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
  const [t, i18n] = useTranslation("common");
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  function handleToggleInfo() {
    setIsDescriptionVisible(!isDescriptionVisible);
  }

  function handleLinkButton(url: string | undefined) {
    window.open(url, "_blank");
  }

  return (
    <div className={"portfolio-item-container"}>
      <div className={"project-view-container"}>
        <div className={"image-container"}>
          <Slideshow id={props.id} slides={props.images ? props.images : []}/>
        </div>
        <div className={"buttons-container"}>
          <button
            className={`portfolio-button ${props.commercial ? "show" : "hide"}`}
            disabled={props.referenceUrl ? false : true}
            onClick={() => handleLinkButton(props.referenceUrl)}
          >
            {t("portfolioItem.buttons.references")}
          </button>
          <button
            className={`portfolio-button ${
              !props.commercial ? "show" : "hide"
            }`}
            disabled={props.referenceUrl ? false : true}
            onClick={() => handleLinkButton(props.referenceUrl)}
          >
            {t("portfolioItem.buttons.see")}
          </button>
          <button
            className={`portfolio-button ${
              !props.commercial ? "show" : "hide"
            }`}
            disabled={props.sourceCodeUrl ? false : true}
            onClick={() => handleLinkButton(props.sourceCodeUrl)}
          >
            {t("portfolioItem.buttons.github")}
          </button>
        </div>
      </div>
      <div className={`project-header-container`}>
        <h1>{t(`portfolioItem.projects.${props.id}.title`)}</h1>
        <div className={"info-button-container"}>
          <FontAwesomeIcon
            className={"info-button"}
            icon={faInfoCircle}
            onClick={() => handleToggleInfo()}
          />
        </div>
      </div>
      <div className={"portfolio-technologies-container"}>
        {props.technologies.map((value: string | IconName, index: number) => {
          return value === "typescript" ? (
            <TSlogo
              key={`tech-icon-${props.id}-${index}`}
              className={"tech-icon"}
            />
          ) : (
            <FontAwesomeIcon
              className={"tech-icon"}
              key={`tech-icon-${props.id}-${index}`}
              icon={["fab", value as IconName]}
            />
          );
        })}
      </div>
      <p
        dangerouslySetInnerHTML={
          props.commercial
            ? CreateTextHtml(
            t("portfolioItem.commercialText", {
              collaborateCompany: props.collaborateCompany,
              collaborateCompanyUrl: props.collaborateCompanyUrl
            })
            )
            : CreateTextHtml("")
        }
      ></p>
      <p
        className={`description-container ${
          isDescriptionVisible ? "show" : "hide"
        }`}
        dangerouslySetInnerHTML={CreateTextHtml(
          t(`portfolioItem.projects.${props.id}.description`)
        )}
      ></p>
    </div>
  );
};

export default PortfolioItem;
