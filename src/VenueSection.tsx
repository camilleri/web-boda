import { Trans, useTranslation } from "react-i18next";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";
import Box from "./style_components/Box";
import styled from "styled-components";
import {
  boxWidth,
  boxWidthMobile,
  innerSectionSpacer,
  outerSectionSpacer,
  textSize,
  textSizeMobile,
  titleSize,
  titleSizeMobile,
  titleWeight,
} from "./style_components/constants";
import LocationIcon from "/icons/location.svg";
import SectionIcon from "/icons/venue-section.svg";
import CalendarIcon from "/icons/calendar.svg";
import ClockIcon from "/icons/clock.svg";
import BeerICon from "/icons/beer.svg";
import { useState } from "react";
import Icon from "./style_components/Icon";
import Section from "./style_components/Section";
// import Carrousel from "./carrousel/Carrousel";

const VenueImage = styled.img`
  background-position: center top; /* Horizontally and vertically center */
  height: 100%;
  width: 100%;
  object-fit: contain;

  /* Adjust for smaller screens (mobile) */
  @media (max-width: 768px) {
  }
`;

const VenueContainer = styled(FlexContainer)`
  cursor: pointer;
`;

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};
function VenueSection(props: Props) {
  const { t } = useTranslation();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  async function openGoogleMaps() {
    window.open("https://maps.app.goo.gl/bgEtu2QTiFE16Pht7", "_blank");
  }

  return (
    <Section
      backgroundColor={props.backgroundColor}
      reference={props.reference}
    >
      <Spacer top={outerSectionSpacer} />
      <Icon src={SectionIcon} size="4em" />
      <Spacer bottom={innerSectionSpacer} />
      <Text
        fontSize={titleSize}
        fontSizeMobile={titleSizeMobile}
        fontWeight={titleWeight}
      >
        {t("venue_title")}
      </Text>
      <Spacer top={innerSectionSpacer} />
      <Box width={boxWidth} widthMobile={boxWidthMobile}>
        <FlexContainer width="100%" flexDirection="column" alignItems="center">
          <FlexContainer flexDirection="column" alignItems="flex-start">
            <VenueContainer
              onClick={openGoogleMaps}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              alignItems="center"
            >
              <Icon
                isHovered={isHovered}
                src={LocationIcon}
                alt="Google Maps"
                mobileSize="4vh"
              />
              <Spacer left="8px" />
              <Text
                fontSize={textSize}
                fontSizeMobile={textSizeMobile}
                textAlign="left"
              >
                <Trans i18nKey="venue_message" />
              </Text>
            </VenueContainer>
            <FlexContainer alignItems="center">
              <Icon src={CalendarIcon} alt="Calendar" mobileSize="4vh" />
              <Spacer left="8px" />
              <Text
                fontSize={textSize}
                fontSizeMobile={textSizeMobile}
                textAlign="left"
              >
                <Trans i18nKey={"celebration_date"} />
              </Text>
            </FlexContainer>
            <FlexContainer alignItems="center">
              <Icon src={ClockIcon} alt="Clock" mobileSize="4vh" />
              <Spacer left="8px" />
              <Text
                fontSize={textSize}
                fontSizeMobile={textSizeMobile}
                textAlign="left"
              >
                <Trans i18nKey={"celebration_time"} />
              </Text>
            </FlexContainer>
            <Spacer top={innerSectionSpacer} />
            <FlexContainer
              width="100%"
              flexDirection="column"
              alignItems="center"
            >
              <Text
                fontSize={titleSize}
                fontSizeMobile={titleSizeMobile}
                fontWeight={titleWeight}
              >
                {t("prewedding_title")}
              </Text>
            </FlexContainer>
            <Spacer top={innerSectionSpacer} />
            <FlexContainer alignItems="center">
              <Icon src={BeerICon} alt="Beer" mobileSize="4vh" />
              <Spacer left="8px" />
              <Text
                fontSize={textSize}
                fontSizeMobile={textSizeMobile}
                textAlign="left"
              >
                <Trans i18nKey="prewedding" />
              </Text>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
        <Spacer top={innerSectionSpacer} />
        <VenueImage src="/monasteri/mon-4.jpg" alt="Venue" />
        {/* <Carrousel /> */}
        <Spacer top={innerSectionSpacer} />
      </Box>
      <Spacer top={outerSectionSpacer} />
    </Section>
  );
}

export default VenueSection;
