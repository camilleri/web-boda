import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";
import "./i18n"; // Import your i18n configuration file.
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  bannerImage,
  colorDarkGreen,
  colorOrange,
  innerSectionSpacer,
  outerSectionSpacer,
  colorBanner,
} from "./style_components/constants";
import ArrowAnimation from "./ArrowAnimation";
import { RgbToRgba } from "./RgbToRgba";

const BannerStyle = styled.div`
  background: linear-gradient(
      ${colorBanner} 0%,
      ${RgbToRgba(colorDarkGreen, 0.85)} 30%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${bannerImage});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: top;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const Rama = styled.img`
  background-position: center top; /* Horizontally and vertically center */
  height: 13vh;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 12vh;
  }
`;

type Props = {
  reference: React.RefObject<HTMLDivElement>;
  venueReference: React.RefObject<HTMLDivElement>;
  textColor: string;
};
function Banner(props: Props) {
  const { t } = useTranslation();

  return (
    <BannerStyle ref={props.reference}>
      <Spacer top="4vh" mobileTop="1vh" />
      <FlexContainer
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
        height="100%"
      >
        <FlexContainer alignItems="center" flexDirection="column">
          <Spacer mobileTop="46px" left="20px">
            <Rama src="/rama_blanc.svg" />
          </Spacer>
          <FlexContainer>
            <Text
              fontSize="6vh"
              fontSizeMobile="clamp(2vh, 5vh, 6vh)"
              color={props.textColor}
              fontWeight="300"
            >
              MARIA
            </Text>
            <Spacer left="0.5em" />
            <Text
              fontFamily="Cormorant Garamond"
              fontSize="6vh"
              fontSizeMobile="clamp(2vh, 5vh, 6vh)"
              color={colorOrange}
              fontWeight="300"
            >
              &
            </Text>
            <Spacer left="0.5em" />
            <Text
              fontSize="6vh"
              fontSizeMobile="clamp(2vh, 5vh, 6vh)"
              color={props.textColor}
              fontWeight="300"
            >
              DAVID
            </Text>
          </FlexContainer>
          <Text fontSize="2.5vh" fontSizeMobile="3vh" color={props.textColor}>
            {t("date")}
          </Text>
        </FlexContainer>
        <Spacer bottom={innerSectionSpacer} mobileBottom={outerSectionSpacer}>
          <ArrowAnimation venueReference={props.venueReference} />
        </Spacer>
      </FlexContainer>
    </BannerStyle>
  );
}

export default Banner;
