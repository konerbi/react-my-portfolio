import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { EnterAnimationService } from "../services/enter-animation.service";

const Contact = () => {
  const [animateOnEnter, setAnimateOnEnter] = useState(false);
  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    EnterAnimationService.startAnimationOnEnter(setAnimateOnEnter);

    return () => {
      EnterAnimationService.clearAnim();
    };
  }, []);

  return (
    <div className={`contact-wrapper`}>
      <div className={`contact-container`}>
        <img
          src={"src/assets/images/logo.svg"}
          className={`${animateOnEnter ? "open" : ""}`}
        />
        <div className={`contact-data ${animateOnEnter ? "open" : ""}`}>
          <h3>{t("contact.header")}</h3>
          <p>{t("contact.address")}</p>
          <p>
            <a href={`mailto:${t("contact.email")}`}>{t("contact.email")}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
