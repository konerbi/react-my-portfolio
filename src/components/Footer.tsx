import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {EnterAnimationService} from '../services/enter-animation.service';

const Footer = () => {
  const [t, i18n] = useTranslation("common");
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const [animateOnEnter, setAnimateOnEnter] = useState(false);

  const socialItems: any[] = [
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
    EnterAnimationService.startAnimationOnEnter(setAnimateOnEnter);

    let currentDate = new Date();
    setCurrentYear(currentDate.getFullYear());

    return () => {
      EnterAnimationService.clearAnim();
    };
  }, []);

  return (
    <div className={`footer-container ${animateOnEnter ? "open" : ""}`}>
      <div className={`footer-inner-container`}>
        <div className={`social-media`}>
          {socialItems.map((value, index) => {
            return (
              <div key={"socialItem-" + index} className={`footer-icon-container`}>
                <a className={`footer-icon`} href={value.href} title={value.title} target="_blank">
                  <FontAwesomeIcon icon={["fab", value.icon]} />
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
