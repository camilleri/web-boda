import { useState } from "react";
import styled from "styled-components";
import Spacer from "./style_components/Spacer";
import { colorSelectedGray } from "./style_components/constants";

type IconProps = {
  iconSize: string;
  iconSizeMobile: string;
};
const Icon = styled.img<IconProps>`
  height: ${(props) => props.iconSize};
  transition: background-color 0.3s, transform 0.3s; /* Smooth transition for hover effects */

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: ${(props) => props.iconSizeMobile};
  }
`;

const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`;

const TextWithLinkStyle = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  background-color: ${colorSelectedGray};
  border-radius: 12px;
  padding-left: 16px;
`;

type Props = {
  text: string;
  icon: string;
  iconSize: string;
  iconSizeMobile: string;
};

function TextWithLink(props: Props) {
  const [, setIsHovered] = useState(false);

  const navigateToPaypal = async () => {
    window.open(props.text, "_blank");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <TextWithLinkStyle
      onClick={navigateToPaypal}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon
        iconSize={props.iconSize}
        iconSizeMobile={props.iconSizeMobile}
        src={props.icon}
      />
      <Spacer left="16px" />
      <IconContainer>
        {/* <IconStyle
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke={colorVerdOscurBanner}
          fill="none"
          isHovered={isHovered}
        >
          <path
            d="M5 12V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H12M8.11111 12H12M12 12V15.8889M12 12L5 19"
            stroke="#464455"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </IconStyle> */}
      </IconContainer>
    </TextWithLinkStyle>
  );
}

export default TextWithLink;
