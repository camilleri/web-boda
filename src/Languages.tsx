import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  colorDarkGreen,
  colorLightGreen,
  colorSelectedDarkGreen,
} from "./style_components/constants";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";

const LanguageOption = styled.div`
  padding: 0.5em;
  text-align: center;
  cursor: pointer;
  font-size: medium;
  font-weight: 500;
  font-family: Courier, monospace;
  color: ${colorDarkGreen};
  border-radius: 8px;
  transition: color 0.3s, transform 0.3s; /* Smooth transition for hover effects */
  &:hover {
    background-color: ${colorDarkGreen};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
  }
`;

const SelectedLanguageOption = styled(LanguageOption)`
  color: ${colorSelectedDarkGreen};
  background-color: ${colorLightGreen};
`;

type LanguageProps = {
  language: string;
};

function Language(props: LanguageProps) {
  const { i18n } = useTranslation();

  const currentLang = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return currentLang === props.language ? (
    <SelectedLanguageOption>
      {props.language.toUpperCase()}
    </SelectedLanguageOption>
  ) : (
    <LanguageOption onClick={() => changeLanguage(props.language)}>
      {props.language.toUpperCase()}
    </LanguageOption>
  );
}

function Languages() {
  return (
    <div>
      <FlexContainer>
        <Language language="val" />
        <Spacer right="4px" />
        <Language language="en" />
        <Spacer right="4px" />
        <Language language="es" />
      </FlexContainer>
    </div>
  );
}

export default Languages;
