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
import { useState } from "react";
import Icon from "./style_components/Icon";
import Section from "./style_components/Section";
import React from "react";

const MusicContainer = styled(FlexContainer)`
  cursor: pointer;
  align-items: center;
`;

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};
function MusicSection(props: Props) {
  const { t } = useTranslation();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  async function openSpotify() {
    window.open("https://open.spotify.com/playlist/2ySxHhGeCxnUtt8UqMQxpn?si=b5d056412d5d4174", "_blank");
  }

  return (
    <Section
      backgroundColor={props.backgroundColor}
      reference={props.reference}
    >
      <Spacer top={outerSectionSpacer} />
      <Icon src={MusicIcon} size="4em" mobileSize="5vh" />
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
          <FlexContainer flexDirection="column" alignItems="flex-start">
            <MusicContainer
              onClick={openSpotify}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <Icon isHovered={isHovered} src={SpotifyIcon} size="2em" mobileSize="6vh" /> 
              <Trans i18nKey="music_list" />
        
            </MusicContainer>
            <Spacer top={innerSectionSpacer} />
        </FlexContainer>
      </Box>
      <Spacer top={outerSectionSpacer} />
    </Section>
  );
}

export default MusicSection;
