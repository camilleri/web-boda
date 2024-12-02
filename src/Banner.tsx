import "./Banner.css";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";
import "./i18n"; // Import your i18n configuration file.
import { useTranslation } from "react-i18next";
import CountdownTimer from "./countdown/CountdownTimer";

function Banner() {
  const { t } = useTranslation();

  return (
    <div className="banner-img">
      <Spacer top="88px" />
      <FlexContainer
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
        height="100%">
        <FlexContainer
          alignItems="center"
          flexDirection="column">
          <Text
            fontSize="8vh"
            fontSizeMobile="clamp(2vh, 5vh, 6vh);"
            fontWeight="600">
            {t("banner_title")}
          </Text>
          <Text fontSize="4vh" fontSizeMobile="3vh" fontWeight="600">
            {t("date")}
          </Text></FlexContainer>
        <CountdownTimer targetDate="2025-04-12" />
      </FlexContainer>
    </div>
  );
}

export default Banner;
