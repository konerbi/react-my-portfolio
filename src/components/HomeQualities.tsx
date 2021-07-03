import React from "react";
import { useTranslation } from "react-i18next";
import CreateTextHtml from "../utils/CreateTextHtml";
import ScrollToElement from "../utils/ScrollToElement";

interface HomeQualitiesProps {
  isQualityItemOutsideViewport: boolean;
}

const HomeQualities = (props: HomeQualitiesProps) => {
  const [t, i18n] = useTranslation("common");

  const qualityItems = [
    {
      isVertical: false,
      isWide: false,
      isTextIcon: true,
      iconText: "15+",
      iconSrc: null,
      text: "experience",
    },
    {
      isVertical: true,
      isWide: false,
      isTextIcon: true,
      iconText: "solid",
      iconSrc: null,
      text: "knowledge",
    },
    {
      isVertical: false,
      isWide: false,
      isTextIcon: true,
      iconText: "codeIcon",
      iconSrc: null,
      text: "code",
    },
    {
      isVertical: false,
      isWide: false,
      isTextIcon: false,
      iconText: null,
      iconSrc: "responsive.svg",
      text: "rwd",
    },
    {
      isVertical: false,
      isWide: false,
      isTextIcon: false,
      iconText: null,
      iconSrc: "computer.svg",
      text: "graphics",
    },
    {
      isVertical: false,
      isWide: false,
      isTextIcon: false,
      iconText: null,
      iconSrc: "grid.svg",
      text: "pixel",
    },
    {
      isVertical: false,
      isWide: true,
      isTextIcon: false,
      iconText: null,
      iconSrc: "team.svg",
      text: "teamplayer",
    },
  ];

  return (
    <div className={"home-qualities-container"} id={"home-qualities-container"}>
      <div className={"qualities-box"}>
        {qualityItems.map((item, index) => {
          return (
            <div
              key={"quality-item-" + index}
              className={`quality-item ${
                props.isQualityItemOutsideViewport ? "hide-onload" : ""
              }
               ${item.isVertical ? `vertical` : ``}
               ${!item.isTextIcon ? `with-icon` : ``}
               ${item.isWide ? `wide` : ``}`}
            >
              {item.isTextIcon ? (
                <div
                  className={`quality-icon text-icon`}
                  dangerouslySetInnerHTML={CreateTextHtml(
                    t(`home.qualities.${item.iconText}`)
                  )}
                ></div>
              ) : (
                <div className={`quality-icon`}>
                  <img src={`src/assets/images/home/${item.iconSrc}`}></img>
                </div>
              )}
              <div
                className={"quality-text"}
                dangerouslySetInnerHTML={CreateTextHtml(
                  t(`home.qualities.${item.text}`)
                )}
              ></div>
            </div>
          );
        })}
      </div>
      <button
        className={"button-scroll down inverse"}
        onClick={() =>
          ScrollToElement("home-main-container", "home-technologies-container")
        }
      ></button>
    </div>
  );
};

export default HomeQualities;
