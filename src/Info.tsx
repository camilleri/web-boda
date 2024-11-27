import FlexContainer from "./style_components/FlexContainer";
import Text from "./style_components/Text";
import "./i18n"; // Import your i18n configuration file.
import { useTranslation } from "react-i18next";
import Spacer from "./style_components/Spacer";
import styled from "styled-components";
import Box from "./style_components/Box";

// Define the styled link
const FormLink = styled.a`
  text-decoration: none; /* Remove the default underline */
  color: #fff; /* Set the text color */
  background-color: #667665;
  padding: 10px 20px; /* Add padding for space around the text */
  border-radius: 5px; /* Round the corners */
  display: inline-block; /* Make it behave like a block but inline */
  transition: background-color 0.3s, transform 0.3s; /* Smooth transition for hover effects */

  /* Hover effect */
  &:hover {
    background-color: #546153; /* Darker shade when hovered */
    transform: scale(1.05); /* Slightly enlarge the link */
  }

  /* Focus effect */
  &:focus {
    outline: none; /* Remove default focus outline */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add a custom focus shadow */
  }

  font-size: 2vw; /* Set the font size */

  @media (max-width: 768px) {
    font-size: 5vw; /* Set the font size for mobile */
  }
`;

function Info() {
  const { t } = useTranslation();

  return (
    <FlexContainer
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Spacer top="4vh" />
      <Text fontSize="2.5vw" fontSizeMobile="5vw" fontWeight="600">
        {t("confirm_assistance_title")}
      </Text>
      <Spacer top="1.5vh" />
      <Box width="50vw" widthMobile="80vw">
        <Text fontSize="2vw" fontSizeMobile="4vw" textAlign="center">
          {t("confirm_assistance_message")}
          <Spacer top="16px" />
        </Text>
      </Box>
      <Spacer top="1.5vh" />
      <div>
        <FormLink href="#form" className="form-link">
          {t("rsvp_form")}
        </FormLink>
      </div>
      <Spacer top="6vh" />
    </FlexContainer>
  );
}

export default Info;
