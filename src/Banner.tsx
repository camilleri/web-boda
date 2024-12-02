import "./Banner.css";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";
import "./i18n"; // Import your i18n configuration file.
import { useTranslation } from "react-i18next";

type Props = {
  reference: React.RefObject<HTMLDivElement>;
};
function Banner(props: Props) {
  const { t } = useTranslation();

  return (
    <div className="banner-img" ref={props.reference}>
      <Spacer top="88px" />
      <FlexContainer
        alignItems="flex-end"
        justifyContent="space-between"
        flexDirection="column"
        height="100%"
      >
        <FlexContainer alignItems="center" flexDirection="column">
          <Text
            fontSize="8vh"
            fontSizeMobile="clamp(2vh, 5vh, 6vh);"
            fontWeight="600"
            color="white"
            textShadow={`4px 4px 8px black};`}
          >
            {t("banner_title")}
          </Text>
          <Text
            fontSize="4vh"
            fontSizeMobile="3vh"
            fontWeight="600"
            color="white"
            textShadow={`4px 4px 8px black;`}
          >
            {t("date")}
          </Text>
        </FlexContainer>
      </FlexContainer>
    </div>
  );
}

export default Banner;
