import styled from "styled-components";
import Languages from "./Languages";
import Menu from "./Menu";
import FlexContainer from "./style_components/FlexContainer";
import { colorGray } from "./style_components/constants";
import { useEffect, useState } from "react";

const HeaderBar = styled.header<{ showHeader: boolean }>`
  background-position: center top; /* Horizontally and vertically center */
  background-color: ${colorGray};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure the header stays above other content */
  height: 66px;
  padding: 0 8px;
  box-sizing: border-box; /* Ensures padding doesn't affect width */
  transition: transform 0.5s ease;
  transform: translateY(${(props) => (props.showHeader ? "0" : "-100%")});
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  /* Adjust for smaller screens (mobile) */
  @media (max-width: 768px) {
    height: 56px;
    padding: 0 11px;
  }
`;

export function Header() {
  const [scrollPosition, setScrollPosition] = useState(0); // Tracks the previous scroll position
  const [isScrollingUp, setIsScrollingUp] = useState(false); // Tracks the scroll direction
  const [showHeader, setShowHeader] = useState(true); // Tracks the scroll direction

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      // Determine if scrolling up
      if (currentPosition < scrollPosition) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      // Update the scroll position
      setScrollPosition(currentPosition);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]); // Dependency to track the previous position

  useEffect(() => {
    if (isScrollingUp) {
      setShowHeader(true);
    } else {
      const timer = setTimeout(() => setShowHeader(false), 300); // Delay hiding the header
      return () => clearTimeout(timer);
    }
  }, [isScrollingUp]);

  return (
    <HeaderBar showHeader={showHeader}>
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
