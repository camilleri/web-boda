import { useTranslation } from "react-i18next";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";
import Box from "./style_components/Box";
import {
  boxWidth,
  boxWidthMobile,
  innerSectionSpacer,
  outerSectionSpacer,
  textSize,
  textSizeMobile,
  titleSize,
  titleSizeMobile,
  titleWeight,
} from "./style_components/constants";
import Section from "./style_components/Section";
import React from "react";
import RotatingIcon from "./RotatingIcon";

interface Props {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
  titleicon: string; // URL or path
  linkicon: string; // URL or path
  titlekey: string;
  messagekey: string;
  children: React.ReactNode;
}

function MusicLinkSection(props: Props) {
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
          {t(props.messagekey)}
        </Text>
        <Spacer top={innerSectionSpacer} />
        <Spacer top={innerSectionSpacer} />
        <FlexContainer width="100%" justifyContent="center">
          <iframe
            src="https://open.spotify.com/embed/playlist/2ySxHhGeCxnUtt8UqMQxpn?utm_source=generator&theme=0"
            width="100%"
            height="352"
            style={{ borderRadius: "12px" }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </FlexContainer>
      </Box>
      <Spacer top={outerSectionSpacer} />
    </Section>
  );
}

export default MusicLinkSection;
