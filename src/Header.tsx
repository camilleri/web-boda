import styled from "styled-components";
import Languages from "./Languages";
import Menu from "./Menu";
import FlexContainer from "./style_components/FlexContainer";
import { colorGray } from "./style_components/constants";

const HeaderBar = styled.header`
  background-position: center top; /* Horizontally and vertically center */
  background-color: ${colorGray}; /* Set the background color */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure the header stays above other content */
  height: 66px;
  padding: 0 8px;
  box-sizing: border-box; /* Ensures padding doesn't affect width */

  /* Adjust for smaller screens (mobile) */
  @media (max-width: 768px) {
    height: 56px;
    padding: 0 11px;
  }
`;

export function Header() {
  return (
    <HeaderBar>
      <FlexContainer
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        width="100%"
      >
        <Menu />
        <Languages />
      </FlexContainer>
    </HeaderBar>
  );
}
