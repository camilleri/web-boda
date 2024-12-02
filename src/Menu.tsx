import styled from "styled-components";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import { colorSelectedDarkGreen } from "./style_components/constants";
import { Trans } from "react-i18next";

const MenuLink = styled.div`
  text-decoration: none; /* Remove the default underline */
  color: white; /* Set the text color */
  font-size: 24px;
  font-family: Didot, monospace;
  cursor: pointer;

  /* Hover effect */
  &:hover {
    transform: scale(1.05); /* Slightly enlarge the link */
  }

  /* Focus effect */
  &:focus {
    color: ${colorSelectedDarkGreen};
    font-weight: 700;
  }

  @media (max-width: 768px) {
    visibility: hidden;
  }
`;

type Props = {
  homeRef: React.RefObject<HTMLDivElement>;
  venueRef: React.RefObject<HTMLDivElement>;
  transportRef: React.RefObject<HTMLDivElement>;
  accommodationRef: React.RefObject<HTMLDivElement>;
  formRef: React.RefObject<HTMLDivElement>;
  supportRef: React.RefObject<HTMLDivElement>;
};
function Menu(props: Props) {
  // Function to handle scroll
  const scrollToSection = (sectionRef: any) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <FlexContainer>
      <Spacer left="8px" right="8px">
        <MenuLink onClick={() => scrollToSection(props.homeRef)}>
          <Trans i18nKey="home" />
        </MenuLink>
      </Spacer>
      <Spacer left="8px" right="8px">
        <MenuLink onClick={() => scrollToSection(props.venueRef)}>
          <Trans i18nKey="venue_title" />
        </MenuLink>
      </Spacer>
      <Spacer left="8px" right="8px">
        <MenuLink onClick={() => scrollToSection(props.transportRef)}>
          <Trans i18nKey="transport_title" />
        </MenuLink>
      </Spacer>
      <Spacer left="8px" right="8px">
        <MenuLink onClick={() => scrollToSection(props.formRef)}>
          <Trans i18nKey="RSVP" />
        </MenuLink>
      </Spacer>
      <Spacer left="8px" right="8px">
        <MenuLink onClick={() => scrollToSection(props.supportRef)}>
          <Trans i18nKey="support_title" />
        </MenuLink>
      </Spacer>
    </FlexContainer>
  );
}

export default Menu;
