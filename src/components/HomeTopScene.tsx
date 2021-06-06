import React, { useEffect, useState } from "react";
import CreateTextHtml from "../utils/CreateTextHtml";
import { useTranslation } from "react-i18next";
import { EnterAnimationService } from "../services/enter-animation.service";

const HomeTopScene = () => {
  const [animateOnEnter, setAnimateOnEnter] = useState(false);
  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    EnterAnimationService.startAnimationOnEnter(setAnimateOnEnter);

    return () => {
      EnterAnimationService.clearAnim();
    };
  }, []);

  return (
    <div className={"top-scene-container"}>
      <h1
        className={`${animateOnEnter ? "open" : ""}`}
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
            const itemInitialStyle = {
              width: 0,
              height: 0,
              top: Math.floor(Math.random() * 100) + "vh",
              left: Math.floor(Math.random() * 100) + "vw",
              opacity: opacityValue + "%",
              zIndex: zIndexValue,
            };
            const itemStyle = {
              width: itemWidth + "vw",
              height: itemHeight + "vh",
              top: Math.floor(Math.random() * 100) + "vh",
              left: Math.floor(Math.random() * 100) + "vw",
              opacity: opacityValue + "%",
              zIndex: zIndexValue,
            };
            rows.push(
              <div
                key={`top-background-element-${i}`}
                className={`top-background-element`}
                style={animateOnEnter ? itemStyle : itemInitialStyle}
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
