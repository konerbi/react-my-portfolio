import React from "react";
import CreateTextHtml from "../utils/CreateTextHtml";
import { useTranslation } from "react-i18next";

const HomeTopScene = () => {
  const [t, i18n] = useTranslation("common");

  return (
    <div className={"top-scene-container"}>
      <h1
        dangerouslySetInnerHTML={CreateTextHtml(t("home.topSceneHeader"))}
      ></h1>
      <div id={"top-background-container"} className={"top-background"}>
        {(() => {
          const rows = [];
          for (let i = 0; i < 100; i++) {
            const randomForWidth = Math.floor(Math.random() * 25);
            const randomForHeight = Math.floor(Math.random() * 25);
            const itemWidth = randomForWidth === 0 ? 5 : randomForWidth;
            const itemHeight = randomForHeight === 0 ? 5 : randomForHeight;

            let shadow = "box-shadow";
            const shadowValue: string = `2rem 2rem 2rem #00000090`;
            const opacityValue = Math.floor(
              ((itemWidth * itemHeight) / 625) * 100
            );
            const zIndexValue = Math.floor(
              ((itemWidth * itemHeight) / 625) * 100
            );
            const itemStyle = {
              width: itemWidth + "vw",
              height: itemHeight + "vh",
              top: Math.floor(Math.random() * 100) + "vh",
              left: Math.floor(Math.random() * 100) + "vw",
              // boxShadow: shadowValue,
              opacity: opacityValue + "%",
              zIndex: zIndexValue,
            };
            rows.push(
              <div
                key={`top-background-element-${i}`}
                className={"top-background-element"}
                style={itemStyle}
              ></div>
            );
          }
          return rows;
        })()}
      </div>
    </div>
  );
};

export default HomeTopScene;
