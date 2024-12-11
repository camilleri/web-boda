import { Trans } from "react-i18next";
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
} from "./style_components/constants";
import Icon from "./style_components/Icon";
import Section from "./style_components/Section";
import React from "react";
import RotatingIcon from "./RotatingIcon";

const LinkContainer = styled(FlexContainer)`
  cursor: pointer;
  align-items: center;
  background-color: ${colorSelectedGray};
  border-radius: 12px;
  padding-right: 8px;
  padding-left: 8px;

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
}

function LinkSection(props: Props) {

  return (
    <Section
      backgroundColor={props.backgroundColor}
      reference={props.reference}
    >
      <Spacer top={outerSectionSpacer} />
      <RotatingIcon src={props.titleicon} size="4em" mobileSize="5vh" />
      <Spacer bottom={innerSectionSpacer} />
      <Text
        fontSize={titleSize}
        fontSizeMobile={titleSizeMobile}
        fontWeight={titleWeight}>
        <Trans i18nKey={props.titlekey}/>
      </Text>
      <Spacer top={innerSectionSpacer} />
      <Box width={boxWidth} widthMobile={boxWidthMobile}>
        <Text
          fontSize={textSize}
          fontSizeMobile={textSizeMobile}
          textAlign="left"
        >
          <Trans i18nKey={props.messagekey}/>
        </Text>
        <Spacer top={innerSectionSpacer} />
        <FlexContainer width="100%" justifyContent="center">
          <LinkContainer onClick={props.linkaction}>
            <Icon src={props.linkicon} size="2em" mobileSize="5vh" />
            <Spacer left="0.5em" />
            <Text
              fontSize={textSize}
              fontSizeMobile={textSizeMobile}
              textAlign="left"
            >
              <Trans i18nKey={props.linkkey} />
            </Text>
          </LinkContainer>
        </FlexContainer>
      </Box>
      <Spacer top={outerSectionSpacer} />
    </Section>
  );
}

export default LinkSection;
