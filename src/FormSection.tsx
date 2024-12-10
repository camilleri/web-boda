import Text from "./style_components/Text";
import "./i18n"; // Import your i18n configuration file.
import { useTranslation } from "react-i18next";
import Spacer from "./style_components/Spacer";
import styled from "styled-components";
import Box from "./style_components/Box";

import { Link } from "react-router-dom";
import {
  boxWidth,
  boxWidthMobile,
  colorDarkGreen,
  innerSectionSpacer,
  outerSectionSpacer,
  textSize,
  textSizeMobile,
  titleSize,
  titleSizeMobile,
  titleWeight,
} from "./style_components/constants";
import Section from "./style_components/Section";
import FormIcon from "/icons/form.svg";
import RotatingIcon from "./RotatingIcon";

// Define the styled link
const FormLink = styled(Link)`
  text-decoration: none; /* Remove the default underline */
  color: white; /* Set the text color */
  background-color: ${colorDarkGreen};
  padding: 10px 20px; /* Add padding for space around the text */
  border-radius: 5px; /* Round the corners */
  display: inline-block; /* Make it behave like a block but inline */
  transition: background-color 0.3s, transform 0.3s; /* Smooth transition for hover effects */

  /* Hover effect */
  &:hover {
    background-color: ${colorDarkGreen}; /* Darker shade when hovered */
    transform: scale(1.05);
  }

  /* Focus effect */
  &:focus {
    outline: none; /* Remove default focus outline */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add a custom focus shadow */
  }

  font-size: ${textSize}; /* Set the font size */

  @media (max-width: 768px) {
    font-size: ${textSizeMobile};
  }
`;

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};
function FormSection(props: Props) {
  const { t } = useTranslation();

  return (
    <Section
      backgroundColor={props.backgroundColor}
      reference={props.reference}
    >
      <Spacer top={outerSectionSpacer} />
      <RotatingIcon src={FormIcon} size="4em" mobileSize="6vh" />
      <Spacer top={innerSectionSpacer} />
      <Text
        fontSize={titleSize}
        fontSizeMobile={titleSizeMobile}
        fontWeight={titleWeight}
        textAlign="center"
      >
        {t("confirm_assistance_title")}
      </Text>
      <Spacer top={innerSectionSpacer} />
      <Box width={boxWidth} widthMobile={boxWidthMobile}>
        <Text
          fontSize={textSize}
          fontSizeMobile={textSizeMobile}
          textAlign="center"
        >
          {t("confirm_assistance_message")}
          <Spacer top={innerSectionSpacer} />
        </Text>
      </Box>
      <Spacer top={innerSectionSpacer} />
      <div>
        <FormLink to="/form">{t("rsvp_form")}</FormLink>
      </div>
      <Spacer top={outerSectionSpacer} />
    </Section>
  );
}

export default FormSection;
