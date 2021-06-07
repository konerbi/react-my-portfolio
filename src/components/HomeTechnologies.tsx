import React from "react";
import { useTranslation } from "react-i18next";

interface HomeTechnologiesProps {
  isTechnologyItemOutsideViewport: boolean;
}

const HomeTechnologies = (props: HomeTechnologiesProps) => {
  const [t, i18n] = useTranslation("common");

  const technologiesHard = [
    { src: "angular.svg", ratioX: 1, ratioY: 1 },
    { src: "ts.svg", ratioX: 0.8, ratioY: 0.8 },
    { src: "react.svg", ratioX: 1, ratioY: 1 },
    { src: "js.svg", ratioX: 0.8, ratioY: 0.8 },
  ];
  const libraries = [
    { src: "rxjs.svg", ratioX: 1, ratioY: 1 },
    { src: "ngrx.svg", ratioX: 1, ratioY: 1 },
    { src: "redux.svg", ratioX: 0.8, ratioY: 0.8 },
    { src: "redux-saga.svg", ratioX: 0.8, ratioY: 0.8 },
  ];
  const technologiesSoft = [
    { src: "html5.svg", ratioX: 1, ratioY: 1 },
    { src: "css3.svg", ratioX: 1, ratioY: 1 },
    { src: "sass.svg", ratioX: 1.2, ratioY: 1 },
    { src: "less.svg", ratioX: 1.2, ratioY: 1 },
    { src: "bootstrap.svg", ratioX: 0.8, ratioY: 0.8 },
    { src: "material-ui.svg", ratioX: 0.8, ratioY: 0.8 },
  ];
  const tests = [
    { src: "jasmine.svg", ratioX: 2, ratioY: 1 },
    { src: "jest.svg", ratioX: 1, ratioY: 1 },
  ];
  const toolsHard = [
    { src: "npm.svg", ratioX: 1.2, ratioY: 1 },
    { src: "webpack.svg", ratioX: 1, ratioY: 1 },
    { src: "jenkins.svg", ratioX: 1, ratioY: 2 },
    { src: "git.svg", ratioX: 1.2, ratioY: 1 },
    { src: "gulp.svg", ratioX: 1, ratioY: 1 },
    { src: "webstorm.svg", ratioX: 1, ratioY: 1 },
  ];
  const tools = [
    { src: "jira.svg", ratioX: 0.8, ratioY: 0.8 },
    { src: "confluence.svg", ratioX: 2, ratioY: 1 },
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
    <div className={"home-technologies-container"}>
      <div className={"technologies-box"}>
        <h1>{t("home.technologies.header")}</h1>
        <div className={"technologies-items"}>
          {technologiesHard.map((item, index) => {
            let itemStyle = getItemStyle(item);
            let imgStyle = getImgStyle(item);
            return (
              <div
                key={"technology-item-" + index}
                className={`technology-item ${
                  props.isTechnologyItemOutsideViewport ? "hide-onload" : ""
                }`}
                style={itemStyle}
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
            let itemStyle = getItemStyle(item);
            let imgStyle = getImgStyle(item);
            return (
              <div
                key={"library-item-" + index}
                className={`technology-item ${
                  props.isTechnologyItemOutsideViewport ? "hide-onload" : ""
                }`}
                style={itemStyle}
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
            let itemStyle = getItemStyle(item);
            let imgStyle = getImgStyle(item);
            return (
              <div
                key={"technology-soft-item-" + index}
                className={`technology-item ${
                  props.isTechnologyItemOutsideViewport ? "hide-onload" : ""
                }`}
                style={itemStyle}
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
            let itemStyle = getItemStyle(item);
            let imgStyle = getImgStyle(item);
            return (
              <div
                key={"test-item-" + index}
                className={`technology-item ${
                  props.isTechnologyItemOutsideViewport ? "hide-onload" : ""
                }`}
                style={itemStyle}
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
            let itemStyle = getItemStyle(item);
            let imgStyle = getImgStyle(item);
            return (
              <div
                key={"tool-hard-item-" + index}
                className={`technology-item ${
                  props.isTechnologyItemOutsideViewport ? "hide-onload" : ""
                }`}
                style={itemStyle}
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
            let itemStyle = getItemStyle(item);
            let imgStyle = getImgStyle(item);
            return (
              <div
                key={"tool-item-" + index}
                className={`technology-item ${
                  props.isTechnologyItemOutsideViewport ? "hide-onload" : ""
                }`}
                style={itemStyle}
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
    </div>
  );
};

export default HomeTechnologies;
