import React from "react";
import { useTranslation } from "react-i18next";
import CreateTextHtml from "../utils/CreateTextHtml";

const HomeQualities = () => {
  const [t, i18n] = useTranslation("common");

  return (
    <div className={"home-qualities-container"}>
      <div className={"qualities-box"}>
        <div className={"quality-item"}>
          <div className={"quality-icon text-icon"}>15+</div>
          <div
            className={"quality-text"}
            dangerouslySetInnerHTML={CreateTextHtml(
              t("home.qualities.experience")
            )}
          ></div>
        </div>
        <div className={"quality-item vertical"}>
          <div className={"quality-icon text-icon"}>
            {t("home.qualities.solid")}
          </div>
          <div
            className={"quality-text"}
            dangerouslySetInnerHTML={CreateTextHtml(
              t("home.qualities.knowledge")
            )}
          ></div>
        </div>
        <div className={"quality-item"}>
          <div
            className={"quality-icon text-icon"}
            dangerouslySetInnerHTML={CreateTextHtml(
              t("home.qualities.codeIcon")
            )}
          ></div>
          <div
            className={"quality-text"}
            dangerouslySetInnerHTML={CreateTextHtml(t("home.qualities.code"))}
          ></div>
        </div>
        <div className={"quality-item with-icon"}>
          <div className={"quality-icon"}>
            <img src={`src/assets/images/home/responsive.svg`}></img>
          </div>
          <div
            className={"quality-text"}
            dangerouslySetInnerHTML={CreateTextHtml(t("home.qualities.rwd"))}
          ></div>
        </div>
        <div className={"quality-item with-icon"}>
          <div className={"quality-icon"}>
            <img src={`src/assets/images/home/computer.svg`}></img>
          </div>
          <div
            className={"quality-text"}
            dangerouslySetInnerHTML={CreateTextHtml(
              t("home.qualities.graphics")
            )}
          ></div>
        </div>
        <div className={"quality-item with-icon"}>
          <div className={"quality-icon"}>
            <img src={`src/assets/images/home/grid.svg`}></img>
          </div>
          <div
            className={"quality-text"}
            dangerouslySetInnerHTML={CreateTextHtml(t("home.qualities.pixel"))}
          ></div>
        </div>
        <div className={"quality-item wide"}>
          <div className={"quality-icon"}>
            <img src={`src/assets/images/home/team.svg`}></img>
          </div>
          <div
            className={"quality-text"}
            dangerouslySetInnerHTML={CreateTextHtml(
              t("home.qualities.teamplayer")
            )}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HomeQualities;
