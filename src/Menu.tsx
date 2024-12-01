import styled from "styled-components";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import { Link } from "react-router-dom";
import {
  colorDarkGreen,
  colorSelectedDarkGreen,
} from "./style_components/constants";

const MenuLink = styled(Link)`
  text-decoration: none; /* Remove the default underline */
  color: ${colorDarkGreen}; /* Set the text color */
  transition: color 0.3s, transform 0.3s; /* Smooth transition for hover effects */
  letter-spacing: 1px; /* Add space between letters */

  /* Hover effect */
  &:hover {
    color: ${colorSelectedDarkGreen}; /* Darker shade when hovered */
    transform: scale(1.05); /* Slightly enlarge the link */
  }

  /* Focus effect */
  &:focus {
    color: ${colorSelectedDarkGreen};
    font-weight: 700;
  }

  font-size: large;
  font-weight: 500;
  font-family: Courier, monospace;

  @media (max-width: 768px) {
    font-size: 5vw; /* Set the font size for mobile */
  }
`;

function Menu() {
  return (
    <FlexContainer>
      <Spacer left="8px" right="8px">
        <MenuLink to="/">Home</MenuLink>
      </Spacer>
      <Spacer left="8px" right="8px">
        <MenuLink to="/form">RSVP</MenuLink>
      </Spacer>
      <Spacer left="8px" right="8px">
        <MenuLink to="/form">Venue</MenuLink>
      </Spacer>
    </FlexContainer>
  );
}

export default Menu;
