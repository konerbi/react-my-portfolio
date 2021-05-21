import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t, i18n] = useTranslation("common");

  return (
    <div className={`contact-wrapper`}>
      <div className={`contact-container`}>
        <img src={"src/assets/images/logo.svg"} />
        <div className={`contact-data`}>
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
