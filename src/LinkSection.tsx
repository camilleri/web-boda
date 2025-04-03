import { Trans, useTranslation } from "react-i18next";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";
import Box from "./style_components/Box";
import styled from "styled-components";
import {
  boxWidth,
  boxWidthMobile,
  colorSelectedGray,
  innerSectionSpacer,
  outerSectionSpacer,
  textSize,
  textSizeMobile,
  titleSize,
  titleSizeMobile,
  titleWeight,
  colorLightGreen,
} from "./style_components/constants";
import Icon from "./style_components/Icon";
import Section from "./style_components/Section";
import React from "react";
import RotatingIcon from "./RotatingIcon";

interface LinkContainerProps {
  linkicon: string;
}

const LinkContainer = styled(FlexContainer)<LinkContainerProps>`
  cursor: pointer;
  align-items: center;
  background-color: ${colorSelectedGray};
  ${(props) => (props.linkicon ? "border-radius:12px" : null)};
  ${(props) => (props.linkicon ? "padding-right:8px" : null)};
  ${(props) => (props.linkicon ? "padding-left:8px" : null)};

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledA = styled.a`
  color: black;
  text-decoration: underline ${colorLightGreen};
  font-weight: 500;

  &:hover {
    transform: scale(1.05);
  }
`;

interface Props {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
  titleicon: string; // URL or path
  linkicon: string; // URL or path
  titlekey: string;
  messagekey: string;
  linkkey: string;
  linkaction: () => void;
  children: React.ReactNode;
}

function LinkSection(props: Props) {
  const { t } = useTranslation();
  return (
    <Section
      backgroundColor={props.backgroundColor}
      reference={props.reference}
    >
      <Spacer top={outerSectionSpacer} />
      <RotatingIcon src={props.titleicon} size="4em" mobileSize="8vh" />
      <Spacer bottom={innerSectionSpacer} />
      <Text
        fontSize={titleSize}
        fontSizeMobile={titleSizeMobile}
        fontWeight={titleWeight}
      >
        {t(props.titlekey)}
      </Text>
      <Spacer top={innerSectionSpacer} />
      <Box width={boxWidth} widthMobile={boxWidthMobile}>
        <Text
          fontSize={textSize}
          fontSizeMobile={textSizeMobile}
          textAlign="center"
        >
          <Trans
            i18nKey={props.messagekey}
            components={{
              wedshoots: (
                <StyledA
                  href="http://www.wedshoots.com/download?albumId=ES24982e57"
                  target="_blank"
                >
                  Wedshoots
                </StyledA>
              ),
            }}
          />
        </Text>
        <Spacer top={innerSectionSpacer} />
        <FlexContainer width="100%" justifyContent="center">
          <LinkContainer onClick={props.linkaction} linkicon={props.linkicon}>
            <Icon src={props.linkicon} size="2em" mobileSize="5vh" />
            {props.linkicon && <Spacer left="0.5em" />}
            <Text
              fontSize={textSize}
              fontSizeMobile={textSizeMobile}
              textAlign="center"
            >
              {t(props.linkkey)}
            </Text>
            {props.children}
          </LinkContainer>
        </FlexContainer>
        <Text
          fontSize={textSize}
          fontSizeMobile={textSizeMobile}
          textAlign="center"
          fontWeight="500"
        >
          ES24982e57
        </Text>
      </Box>
      <Spacer top={outerSectionSpacer} />
    </Section>
  );
}

export default LinkSection;
