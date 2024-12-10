import { Trans, useTranslation } from "react-i18next";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";
import Box from "./style_components/Box";
import styled from "styled-components";
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
import MusicIcon from "/icons/music.svg";
import SpotifyIcon from "/icons/spotify.svg";
import Icon from "./style_components/Icon";
import Section from "./style_components/Section";
import React from "react";
import RotatingIcon from "./RotatingIcon";

const MusicContainer = styled(FlexContainer)`
  cursor: pointer;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }
`;

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};
function MusicSection(props: Props) {
  const { t } = useTranslation();

  async function openSpotify() {
    window.open(
      "https://open.spotify.com/playlist/2ySxHhGeCxnUtt8UqMQxpn?si=b5d056412d5d4174",
      "_blank"
    );
  }

  return (
    <Section
      backgroundColor={props.backgroundColor}
      reference={props.reference}
    >
      <Spacer top={outerSectionSpacer} />
      <RotatingIcon src={MusicIcon} size="4em" mobileSize="5vh" />
      <Spacer bottom={innerSectionSpacer} />
      <Text
        fontSize={titleSize}
        fontSizeMobile={titleSizeMobile}
        fontWeight={titleWeight}
      >
        {t("music_title")}
      </Text>
      <Spacer top={innerSectionSpacer} />
      <Box width={boxWidth} widthMobile={boxWidthMobile}>
        <Text
          fontSize={textSize}
          fontSizeMobile={textSizeMobile}
          textAlign="left"
        >
          <Trans i18nKey="music_message" />
        </Text>
        <Spacer top={innerSectionSpacer} />
        <FlexContainer width="100%" justifyContent="center">
          <MusicContainer onClick={openSpotify}>
            <Icon src={SpotifyIcon} size="2em" mobileSize="5vh" />
            <Spacer left="0.5em" />
            <Text
              fontSize={textSize}
              fontSizeMobile={textSizeMobile}
              textAlign="left"
            >
              <Trans i18nKey="music_list" />
            </Text>
          </MusicContainer>
        </FlexContainer>
      </Box>
      <Spacer top={outerSectionSpacer} />
    </Section>
  );
}

export default MusicSection;
