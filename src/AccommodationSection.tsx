import { Trans, useTranslation } from "react-i18next";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";
import {
  boxWidth,
  boxWidthMobile,
  colorVerdClaretBanner,
  innerSectionSpacer,
  middleSectionSpacer,
  outerSectionSpacer,
  textSize,
  textSizeMobile,
  titleSize,
  titleSizeMobile,
  titleWeight,
} from "./style_components/constants";
import HotelIcon from "/icons/hotel.svg";
import Icon from "./style_components/Icon";
import Box from "./style_components/Box";
import Section from "./style_components/Section";
import styled from "styled-components";


const StyledA = styled.a`
  color: black;
  text-decoration: underline ${colorVerdClaretBanner};
  font-weight: 500;

   &:hover {
    transform: scale(1.05);
  }
`;

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};
function AccommodationSection(props: Props) {
  useTranslation();

  return (
    <Section
      backgroundColor={props.backgroundColor}
      reference={props.reference}
    >
      <Spacer top={outerSectionSpacer} />
      <Icon src={HotelIcon} size="4em" mobileSize="6vh" />
      <Spacer bottom={innerSectionSpacer} />
      <Text
        fontSize={titleSize}
        fontSizeMobile={titleSizeMobile}
        fontWeight={titleWeight}
      >
        <Trans i18nKey={"accommodation_title"}/>
      </Text>
      <Spacer top={innerSectionSpacer} />
      <Box width={boxWidth} widthMobile={boxWidthMobile}>
        <Text
          fontSize={textSize}
          fontSizeMobile={textSizeMobile}
          textAlign="center">
          <Trans i18nKey={"accommodation_message"}>
          </Trans>
          <StyledA href='https://olivaturismo.com/oliva/web_php/index.php?contenido=subapartados_coconut&id_boto=4077&title=dnde-dormir' target='_blank'><Trans i18nKey={"accommodation_web"}/></StyledA>
        </Text>
      </Box>
      <Spacer top={middleSectionSpacer} />
    </Section>
  );
}

export default AccommodationSection;
