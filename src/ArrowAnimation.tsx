import "./ArrowAnimation.css";
import Arrow from "/icons/arrow_icon.svg";
import Icon from "./style_components/Icon";
import styled from "styled-components";
import FlexContainer from "./style_components/FlexContainer";
import { useEffect, useState } from "react";
import { colorContrast } from "./style_components/constants";
import { useNavigate } from "react-router-dom";

const ArrowIcon = styled(Icon)`
  transform: rotate(180deg);
  cursor: pointer;
  background-color: ${colorContrast};
  border-radius: 8px;
`;

const ArrowAnimation = () => {
  const [showArrow, setShowArrow] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY; // Get the vertical scroll position
    setShowArrow(scrollTop <= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  return (
    showArrow && (
      <FlexContainer
        onClick={() => navigate("/#venue")}
        animation="bounce 1.5s infinite"
      >
        <ArrowIcon src={Arrow} size="2em" mobileSize="5vh" />
      </FlexContainer>
    )
  );
};

export default ArrowAnimation;
