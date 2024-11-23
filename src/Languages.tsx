import { useEffect, useState } from "react";
import "./Languages.css";
import { useTranslation } from "react-i18next";

function Languages() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  const getSelectedClass = (language: string) => {
    return language === selectedLanguage ? "selected" : "unselected";
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <div className="ul-buttons">
        <div className={`list-item ${getSelectedClass("val")}`} onClick={() => changeLanguage("val")}>VAL</div>
        <div className={`list-item ${getSelectedClass("en")}`} onClick={() => changeLanguage("en")}>EN</div>
        <div className={`list-item ${getSelectedClass("es")}`} onClick={() => changeLanguage("es")}>ES</div>
      </div>
    </div>
  );
}

export default Languages;
