import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("common");
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  const socialItems = [
    {
      title: "Github",
      href: "https://github.com/konerbi",
      icon: "github",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/konrad-erbetowski-3a139a5",
      icon: "linkedin",
    },
  ];

  useEffect(() => {
    let currentDate = new Date();
    setCurrentYear(currentDate.getFullYear());
  }, []);

  return (
    <div className={`footer-container`}>
      <div className={`footer-inner-container`}>
        <div className={`social-media`}>
          {socialItems.map((value, index) => {
            return (
              <div key={"socialItem-" + index} className={`footer-icon-container`}>
                <a className={`footer-icon`} href={value.href} title={value.title} target="_blank">
                  <img
                    className={value.icon}
                    src={`src/assets/images/${value.icon}.svg`}
                  ></img>
                </a>
              </div>
            );
          })}
        </div>
        <p className={`copyrights`}>
          {t("footer.copyrights", { currentYear: currentYear })}
        </p>
      </div>
    </div>
  );
};

export default Footer;
