import "./Banner.css";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";
import "./i18n"; // Import your i18n configuration file.
import { useTranslation } from "react-i18next";

function Banner() {
  const { t } = useTranslation();

  return (
    <div className="banner-img">
      <Spacer top="88px" />
      <FlexContainer
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text fontSize="8vh" fontWeight="600">
          Maria + David
        </Text>
        <Text fontSize="4vh" fontWeight="600">
          {t("date")}
        </Text>
      </FlexContainer>
    </div>
  );
}

export default Banner;
