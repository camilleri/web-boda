import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { colorDarkGreen, colorMenuText } from "./style_components/constants";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import { useMatch } from "react-router-dom";
import useIsMobile from "./hooks/useIsMobile";

const LanguageOption = styled.div`
  font-size: 1em;
  padding: 0.5em;
  text-align: center;
  cursor: pointer;
  font-size: medium;
  font-weight: 500;
  font-family: Roboto Flex, sans-serif;
  color: ${colorMenuText};
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
  color: white;
  background-color: ${colorDarkGreen};
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
  const isMobile = useIsMobile();
  const isVideo = useMatch("/video");

  if (isVideo && isMobile) {
    return null;
  }


  return (
    <Spacer right="16px" mobileRight="0px">
      <FlexContainer>
        <Language language="val" />
        <Spacer right="4px" />
        <Language language="en" />
        <Spacer right="4px" />
        <Language language="es" />
      </FlexContainer>
    </Spacer>
  );
}

export default Languages;
