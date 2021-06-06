import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next";
import CreateTextHtml from "../utils/CreateTextHtml";
import {EnterAnimationService} from '../services/enter-animation.service';

const About = () => {
  const [animateOnEnter, setAnimateOnEnter] = useState(false);
  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    EnterAnimationService.startAnimationOnEnter(setAnimateOnEnter);

    return () => {
      EnterAnimationService.clearAnim();
    };
  }, []);

  return (
    <div className={"about-container"}>
      <div className={"about-wrapper"}>
        <div className={"about-graphic-container"}>
          <div className={`about-photo-box ${animateOnEnter ? "open" : ""}`}>
            {/*<div className={'radial-blend'}></div>*/}
            <img src={"src/assets/images/about/avatar.svg"}></img>
          </div>
        </div>
        <div className={`about-text-container ${animateOnEnter ? "open" : ""}`}>
          <h1>{t("about.header")}</h1>
          <div
            className={"about-text-content"}
            dangerouslySetInnerHTML={CreateTextHtml(t("about.text"))}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
