import { useState } from "react";
import {
  colorSelectedGray,
  textSize,
  textSizeMobile,
} from "./style_components/constants";
import styled from "styled-components";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";

type CopyIconStyleProps = {
  isHovered: boolean;
  isCopied: boolean;
};
const CopyIconStyle = styled.svg<CopyIconStyleProps>`
  height: 1.5em;
  ${(props) =>
    props.isHovered || props.isCopied ? `transform: scale(1.05);` : null}

  @media (max-width: 768px) {
    height: 1em;
  }
`;

const Icon = styled.img`
  height: 2.5em;

  @media (max-width: 768px) {
    height: 1.5em;
  }
`;

const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`;

// Feedback text when the text is copied
// const FeedbackText = styled.span`
//   font-size: 0.8em;
//   position: absolute;
//   left: 150%;
//   padding-left: 8px;
//   padding-right: 8px;
//   background-color: ${colorSelectedGray};
//   border-radius: 5px;

//   @media (max-width: 768px) {
//     visibility: hidden;
//   }
// `;

const TextWithIconStyle = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  background-color: ${colorSelectedGray};
  border-radius: 12px;
  padding-right: 8px;
`;

type Props = {
  text: string;
  icon: string;
};

function TextWithIcon(props: Props) {
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = async () => {
    try {
      const textWithoutWhitespace = props.text.replace(/\s/g, "");
      await navigator.clipboard.writeText(textWithoutWhitespace);
      setIsCopied(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <TextWithIconStyle
      onClick={copyToClipboard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon src={props.icon} alt="Bank" />
      <Spacer left="16px" mobileLeft="8px" />
      <Text
        fontSize={textSize}
        fontSizeMobile={textSizeMobile}
        textAlign="center"
      >
        {props.text}
      </Text>
      <Spacer left="16px" mobileLeft="8px" />
      <IconContainer>
        <CopyIconStyle
          isHovered={isHovered}
          isCopied={isCopied}
          viewBox="0 -0.5 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.676 14.248C17.676 15.8651 16.3651 17.176 14.748 17.176H7.428C5.81091 17.176 4.5 15.8651 4.5 14.248V6.928C4.5 5.31091 5.81091 4 7.428 4H14.748C16.3651 4 17.676 5.31091 17.676 6.928V14.248Z"
            stroke="#000000"
            stroke-width={isCopied ? "2" : "1.5"}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.252 20H17.572C19.1891 20 20.5 18.689 20.5 17.072V9.75195"
            stroke="#000000"
            stroke-width={isCopied ? "2" : "1.5"}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </CopyIconStyle>
        {/* {isCopied && <FeedbackText>Copied!</FeedbackText>}
        {isHovered && !isCopied && (
          <FeedbackText>Copy to clipboard</FeedbackText>
        )} */}
      </IconContainer>
    </TextWithIconStyle>
  );
}

export default TextWithIcon;
