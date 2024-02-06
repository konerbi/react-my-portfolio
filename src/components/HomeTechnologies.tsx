import React from "react";
import { useTranslation } from "react-i18next";
import ScrollToElement from "../utils/ScrollToElement";

interface HomeTechnologiesProps {
  isTechnologyItemOutsideViewport: boolean;
}

const HomeTechnologies = (props: HomeTechnologiesProps) => {
  const [t, i18n] = useTranslation("common");

  const technologiesHard = [
    { src: "angular.svg", ratioX: 1, ratioY: 1, label: "Angular" },
    { src: "ts.svg", ratioX: 0.8, ratioY: 0.8, label: "TypeScrip" },
    { src: "react.svg", ratioX: 1, ratioY: 1, label: "React" },
    { src: "nextjs.svg", ratioX: 0.5, ratioY: 0.5, label: "Next.js" },
    { src: "js.svg", ratioX: 0.8, ratioY: 0.8, label: "JavaScript" },
  ];
  const libraries = [
    { src: "rxjs.svg", ratioX: 1, ratioY: 1, label: "RxJS" },
    { src: "ngrx.svg", ratioX: 1, ratioY: 1, label: "NgRx" },
    { src: "redux.svg", ratioX: 0.8, ratioY: 0.8, label: "Redux" },
    { src: "redux-saga.svg", ratioX: 0.8, ratioY: 0.8, label: "Redux Saga" },
  ];
  const technologiesSoft = [
    { src: "html5.svg", ratioX: 1, ratioY: 1, label: "HTML5" },
    { src: "css3.svg", ratioX: 1, ratioY: 1, label: "CSS3" },
    { src: "sass.svg", ratioX: 1.2, ratioY: 1, label: "Sass" },
    { src: "less.svg", ratioX: 1.2, ratioY: 1, label: "Less" },
    { src: "bootstrap.svg", ratioX: 0.8, ratioY: 0.8, label: "Bootstrap" },
    { src: "material-ui.svg", ratioX: 0.8, ratioY: 0.8, label: "MaterialUI" },
  ];
  const tests = [
    { src: "jasmine.svg", ratioX: 2, ratioY: 1, label: "Jasmine" },
    { src: "jest.svg", ratioX: 1, ratioY: 1, label: "Jest" },
  ];
  const toolsHard = [
    { src: "npm.svg", ratioX: 1.2, ratioY: 1, label: "npm" },
    { src: "webpack.svg", ratioX: 1, ratioY: 1, label: "Webpack" },
    { src: "jenkins.svg", ratioX: 1, ratioY: 2, label: "Jenkins" },
    { src: "git.svg", ratioX: 1.2, ratioY: 1, label: "Git" },
    { src: "gulp.svg", ratioX: 1, ratioY: 1, label: "Gulp" },
    { src: "webstorm.svg", ratioX: 1, ratioY: 1, label: "WebstormIDE" },
  ];
  const tools = [
    { src: "jira.svg", ratioX: 0.8, ratioY: 0.8, label: "Jira" },
    { src: "confluence.svg", ratioX: 2, ratioY: 1, label: "Confluence" },
  ];

  function getItemStyle(item: any) {
    return {
      width: item.ratioX > item.ratioY ? item.ratioX * 5 + "rem" : "auto",
      height: item.ratioX > item.ratioY ? "auto" : item.ratioY * 5 + "rem",
    };
  }

  function getImgStyle(item: any) {
    return {
      width: item.ratioX > item.ratioY ? "100%" : "auto",
      height: item.ratioX > item.ratioY ? "auto" : "100%",
    };
  }

  return (
    <div
      className={"home-technologies-container"}
      id={"home-technologies-container"}
    >
      <div className={"technologies-box"}>
        <h1>{t("home.technologies.header")}</h1>
        <div className={"technologies-items"}>
          {technologiesHard.map((item, index) => {
            const itemStyle = getItemStyle(item);
            const imgStyle = getImgStyle(item);
            return (
              <div
                key={"technology-item-" + index}
                className={`technology-item ${
                  props.isTechnologyItemOutsideViewport ? "hide-onload" : ""
                }`}
                style={itemStyle}
                aria-label={item.label}
                title={item.label}
              >
                <div className={"technology-icon"}>
                  <img
                    style={imgStyle}
                    src={`src/assets/images/home/technologies/${item.src}`}
                  ></img>
                </div>
              </div>
            );
          })}
        </div>
        <div className={"technologies-items"}>
          {libraries.map((item, index) => {
            const itemStyle = getItemStyle(item);
            const imgStyle = getImgStyle(item);
            return (
              <div
                key={"library-item-" + index}
                className={`technology-item ${
                  props.isTechnologyItemOutsideViewport ? "hide-onload" : ""
                }`}
                style={itemStyle}
                aria-label={item.label}
                title={item.label}
              >
                <div className={"technology-icon"}>
                  <img
                    style={imgStyle}
                    src={`src/assets/images/home/technologies/${item.src}`}
                  ></img>
                </div>
              </div>
            );
          })}
        </div>
        <div className={"technologies-items"}>
          {technologiesSoft.map((item, index) => {
            const itemStyle = getItemStyle(item);
            const imgStyle = getImgStyle(item);
            return (
              <div
                key={"technology-soft-item-" + index}
                className={`technology-item ${
                  props.isTechnologyItemOutsideViewport ? "hide-onload" : ""
                }`}
                style={itemStyle}
                aria-label={item.label}
                title={item.label}
              >
                <div className={"technology-icon"}>
                  <img
                    style={imgStyle}
                    src={`src/assets/images/home/technologies/${item.src}`}
                  ></img>
                </div>
              </div>
            );
          })}
        </div>
        <div className={"technologies-items"}>
          {tests.map((item, index) => {
            const itemStyle = getItemStyle(item);
            const imgStyle = getImgStyle(item);
            return (
              <div
                key={"test-item-" + index}
                className={`technology-item ${
                  props.isTechnologyItemOutsideViewport ? "hide-onload" : ""
                }`}
                style={itemStyle}
                aria-label={item.label}
                title={item.label}
              >
                <div className={"technology-icon"}>
                  <img
                    style={imgStyle}
                    src={`src/assets/images/home/technologies/${item.src}`}
                  ></img>
                </div>
              </div>
            );
          })}
        </div>
        <div className={"technologies-items"}>
          {toolsHard.map((item, index) => {
            const itemStyle = getItemStyle(item);
            const imgStyle = getImgStyle(item);
            return (
              <div
                key={"tool-hard-item-" + index}
                className={`technology-item ${
                  props.isTechnologyItemOutsideViewport ? "hide-onload" : ""
                }`}
                style={itemStyle}
                aria-label={item.label}
                title={item.label}
              >
                <div className={"technology-icon"}>
                  <img
                    style={imgStyle}
                    src={`src/assets/images/home/technologies/${item.src}`}
                  ></img>
                </div>
              </div>
            );
          })}
        </div>
        <div className={"technologies-items"}>
          {tools.map((item, index) => {
            const itemStyle = getItemStyle(item);
            const imgStyle = getImgStyle(item);
            return (
              <div
                key={"tool-item-" + index}
                className={`technology-item ${
                  props.isTechnologyItemOutsideViewport ? "hide-onload" : ""
                }`}
                style={itemStyle}
                aria-label={item.label}
                title={item.label}
              >
                <div className={"technology-icon"}>
                  <img
                    style={imgStyle}
                    src={`src/assets/images/home/technologies/${item.src}`}
                  ></img>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        className={"button-scroll up inverse"}
        onClick={() =>
          ScrollToElement("home-main-container", "top-scene-container")
        }
      ></button>
    </div>
  );
};

export default HomeTechnologies;
