import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = ({ onChangedLanguage }: any) => {
  const [t, i18n] = useTranslation("common");
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [alternateLanguage, setAlternateLanguage] = useState("pl");
  const [showList, setShowList] = useState(false);

  const languages = [
    {
      lang: "pl",
    },
    {
      lang: "en",
    },
  ];

  const changedLanguage = useCallback(() => {
    onChangedLanguage();
  }, [onChangedLanguage]);

  function handleToggle(value = true) {
    setShowList(value);
  }

  function handleLanguage(value: string) {
    i18n.changeLanguage(value);
    setAlternateLanguage(currentLanguage);
    setCurrentLanguage(value);
    setShowList(false);
    changedLanguage();
  }

  return (
    <div className="language">
      <a title={t('navbar.languageToggle')}
        className="link link-language"
        onMouseEnter={() => handleToggle()}
      >
        {currentLanguage} <i className="speednet-icons-caret-down"></i>
      </a>
      <ul
        className={`languages-list ${showList ? "show" : ""}`}
        onMouseLeave={() => handleToggle(false)}
      >
        <li onClick={() => handleLanguage(alternateLanguage)}>
          <a rel="alternate" title={t('navbar.languageToggle')}>
            {alternateLanguage}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LanguageToggle;
