import { useTranslation } from "react-i18next";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";
import Box from "./style_components/Box";
import styled from "styled-components";

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
      <Spacer top="4vh" />
      <Text fontSize="2.5vw" fontSizeMobile="5vw" fontWeight="600">
        {t("venue_title")}
      </Text>
      <Spacer top="1.5vh" />
      <Box width="50vw" widthMobile="80vw">
        <Text fontSize="2vw" fontSizeMobile="4vw" textAlign="center">
          {t("venue_message")}
          <Spacer top="16px" />
        </Text>
        <Spacer top="1.5vh" />
        <VenueImage src="/claustromudejar.jpg" alt="Venue" />
        <Spacer top="1.5vh" />
        <Text fontSize="2vw" fontSizeMobile="4vw" textAlign="center">
          {t("bus_message")}
          <Spacer top="16px" />
        </Text>
      </Box>
      <Spacer top="1.5vh" />
      <Spacer top="6vh" />
    </FlexContainer>
  );
}

export default VenueSection;
