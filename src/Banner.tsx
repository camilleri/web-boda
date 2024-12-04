import "./Banner.css";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";
import "./i18n"; // Import your i18n configuration file.
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { colorSand } from "./style_components/constants";

const Rama = styled.img`
  background-position: center top; /* Horizontally and vertically center */
  height: 20vh;
  object-fit: contain;
`;

type Props = {
  reference: React.RefObject<HTMLDivElement>;
};
function Banner(props: Props) {
  const { t } = useTranslation();

  return (
    <div className="banner-img" ref={props.reference}>
      <Spacer top="3vh" />
      <FlexContainer
        alignItems="flex-end"
        justifyContent="space-between"
        flexDirection="column"
        height="100%"
      >
        <FlexContainer alignItems="center" flexDirection="column">
          <Rama src="/rama_color.png" />
          <FlexContainer>
            <Text
              fontSize="6vh"
              fontSizeMobile="clamp(2vh, 5vh, 6vh)"
              fontWeight="600"
              color="white"
            >
              MARIA
            </Text>
            <Spacer left="0.5em" />
            <Text
              fontSize="6vh"
              fontSizeMobile="clamp(2vh, 5vh, 6vh)"
              fontWeight="600"
              color={colorSand}
            >
              +
            </Text>
            <Spacer left="0.5em" />
            <Text
              fontSize="6vh"
              fontSizeMobile="clamp(2vh, 5vh, 6vh)"
              fontWeight="600"
              color="white"
            >
              DAVID
            </Text>
          </FlexContainer>
          <Text fontSize="2.5vh" fontSizeMobile="3vh" color="white">
            {t("date")}
          </Text>
        </FlexContainer>
      </FlexContainer>
    </div>
  );
}

export default Banner;
