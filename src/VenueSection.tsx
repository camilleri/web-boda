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

const VenueImage = styled.img`
  background-position: center top; /* Horizontally and vertically center */
  height: 100%;
  width: 100%;
  object-fit: contain;

  /* Adjust for smaller screens (mobile) */
  @media (max-width: 768px) {
  }
`;

function VenueSection() {
  const { t } = useTranslation();

  return (
    <FlexContainer
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
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
        <Text
          fontSize={textSize}
          fontSizeMobile={textSizeMobile}
          textAlign="center"
        >
          {t("venue_message")}
          <Spacer top={innerSectionSpacer} />
        </Text>
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
