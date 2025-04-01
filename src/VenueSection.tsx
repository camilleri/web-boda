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
import { ReactNode, useState } from "react";
import Icon from "./style_components/Icon";
import Section from "./style_components/Section";

import React from "react";
import SimpleCarousel from "./carrousel/SimpleCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RotatingIcon from "./RotatingIcon";
import ExternalLinkIcon from "/icons/external-link.svg";

const VenueContainer = styled(FlexContainer)`
  cursor: pointer;
  align-items: center;
`;

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};
function VenueSection(props: Props) {
  const { t } = useTranslation();

  const [isHoveredClubDeTenis, setIsHoveredClubDeTenis] = useState(false);
  const [isHoveredGoogleMaps, setIsHoveredGoogleMaps] = useState(false);

  async function openGoogleMaps() {
    window.open("https://maps.app.goo.gl/bgEtu2QTiFE16Pht7", "_blank");
  }

  async function openClubDeTenis() {
    window.open("https://maps.app.goo.gl/M6H5z248AFcMiCYr9", "_blank");
  }

  const EventDetails = ({
    iconSrc,
    textKey,
    isHovered,
    showExternalLink,
  }: {
    iconSrc: string;
    textKey: string;
    isHovered?: boolean;
    showExternalLink?: ReactNode;
  }) => (
    <FlexContainer alignItems="center">
      <Icon src={iconSrc} alt="Icon" mobileSize="3vh" isHovered={isHovered} />
      <Spacer left="8px" />
      <Text
        fontSize={textSize}
        fontSizeMobile={textSizeMobile}
        textAlign="left"
      >
        <Trans
          i18nKey={textKey}
          components={
            showExternalLink
              ? {
                  link: (
                    <Icon
                      src={ExternalLinkIcon}
                      size="1em"
                      mobileSize="2vh"
                      verticalAlign="middle"
                    />
                  ),
                }
              : undefined
          }
        />
      </Text>
    </FlexContainer>
  );

  return (
    <Section
      backgroundColor={props.backgroundColor}
      reference={props.reference}
    >
      <Spacer top={outerSectionSpacer} />
      <RotatingIcon src={SectionIcon} size="4em" mobileSize="5vh" />
      <Spacer bottom={innerSectionSpacer} />
      <Text
        fontSize={titleSize}
        fontSizeMobile={titleSizeMobile}
        fontWeight={titleWeight}
      >
        {t("prewedding_title")}
      </Text>
      <Spacer top={innerSectionSpacer} />
      <Box width={boxWidth} widthMobile={boxWidthMobile}>
        <FlexContainer width="100%" flexDirection="column" alignItems="center">
          <FlexContainer flexDirection="column" alignItems="flex-start">
            <VenueContainer
              onClick={openClubDeTenis}
              onMouseEnter={() => setIsHoveredClubDeTenis(true)}
              onMouseLeave={() => setIsHoveredClubDeTenis(false)}
            >
              <EventDetails
                isHovered={isHoveredClubDeTenis}
                iconSrc={LocationIcon}
                textKey="prewedding_location"
                showExternalLink
              />
            </VenueContainer>

            <EventDetails iconSrc={CalendarIcon} textKey="prewedding_date" />
            <EventDetails iconSrc={ClockIcon} textKey="prewedding_time" />
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
                {t("venue_title")}
              </Text>
            </FlexContainer>
            <Spacer top={innerSectionSpacer} />

            <VenueContainer
              onClick={openGoogleMaps}
              onMouseEnter={() => setIsHoveredGoogleMaps(true)}
              onMouseLeave={() => setIsHoveredGoogleMaps(false)}
            >
              <EventDetails
                iconSrc={LocationIcon}
                textKey="venue_message"
                isHovered={isHoveredGoogleMaps}
                showExternalLink
              />
            </VenueContainer>
            <EventDetails
              iconSrc={CalendarIcon}
              textKey="celebration_date"
              isHovered={false}
            />
            <EventDetails
              iconSrc={ClockIcon}
              textKey="celebration_time"
              isHovered={false}
            />
          </FlexContainer>
        </FlexContainer>
      </Box>
      <Spacer top={outerSectionSpacer} />

      <SimpleCarousel />

      <Spacer top={innerSectionSpacer} />
    </Section>
  );
}

export default VenueSection;
