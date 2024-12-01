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
import CalendarIcon from "/icons/calendar.svg";
import ClockIcon from "/icons/clock.svg";
import { useState } from "react";

const VenueImage = styled.img`
  background-position: center top; /* Horizontally and vertically center */
  height: 100%;
  width: 100%;
  object-fit: contain;

  /* Adjust for smaller screens (mobile) */
  @media (max-width: 768px) {
  }
`;

type IconProps = {
  isHovered?: boolean;
};
const Icon = styled.img<IconProps>`
  height: 2em;
  transition: background-color 0.3s, transform 0.3s; /* Smooth transition for hover effects */

  @media (max-width: 768px) {
    height: 1.5em;
  }

  ${(props) => (props.isHovered ? `transform: scale(1.1);` : null)}
`;

const VenueContainer = styled(FlexContainer)`
  cursor: pointer;
`;

function VenueSection() {
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
    <FlexContainer
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      backgroundColor="white"
    >
      <Spacer top={outerSectionSpacer} />
      <Text
        fontSize={titleSize}
        fontSizeMobile={titleSizeMobile}
        fontWeight={titleWeight}
      >
        {t("venue_title")}
      </Text>
      <Spacer top={innerSectionSpacer} />
      <Box width={boxWidth} widthMobile={boxWidthMobile}>
        <FlexContainer
          width="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <VenueContainer
            onClick={openGoogleMaps}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Icon isHovered={isHovered} src={LocationIcon} alt="Google Maps" />
            <Spacer left="8px" />
            <Text
              fontSize={textSize}
              fontSizeMobile={textSizeMobile}
              textAlign="center"
            >
              <Trans i18nKey="venue_message" />
            </Text>
          </VenueContainer>
          <FlexContainer>
            <Icon src={CalendarIcon} alt="Calendar" />
            <Spacer left="8px" />
            <Text
              fontSize={textSize}
              fontSizeMobile={textSizeMobile}
              textAlign="center"
            >
              <Trans i18nKey={"celebration_date"} />
            </Text>
          </FlexContainer>
          <FlexContainer>
            <Icon src={ClockIcon} alt="Calendar" />
            <Spacer left="8px" />
            <Text
              fontSize={textSize}
              fontSizeMobile={textSizeMobile}
              textAlign="center"
            >
              <Trans i18nKey={"celebration_time"} />
            </Text>
          </FlexContainer>
        </FlexContainer>
        <Spacer top={innerSectionSpacer} />
        <VenueImage src="/claustromudejar.jpg" alt="Venue" />
        <Spacer top={innerSectionSpacer} />
        <Text
          fontSize={textSize}
          fontSizeMobile={textSizeMobile}
          textAlign="center"
        >
          <Trans i18nKey="bus_message" />
        </Text>
      </Box>
      <Spacer top={innerSectionSpacer} />
    </FlexContainer>
  );
}

export default VenueSection;
