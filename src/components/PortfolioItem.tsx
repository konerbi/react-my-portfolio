import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TSlogo from "../components/TSlogo";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { IconName } from "@fortawesome/free-brands-svg-icons";
import CreateTextHtml from "../styles/utils/CreateTextHtml";

interface PortfolioItemProps {
  id: string;
  technologies: string[] | IconName[];
  commercial?: boolean;
  collaborateCompany?: string;
  description?: string;
  referenceUrl?: string;
  sourceCodeUrl?: string;
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
          <h2
            dangerouslySetInnerHTML={
              props.commercial
                ? CreateTextHtml(
                    t("portfolioItem.commercialText", {
                      collaborateCompany: props.collaborateCompany,
                    })
                  )
                : CreateTextHtml("")
            }
          ></h2>
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
