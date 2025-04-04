import MusicIcon from "/icons/music.svg";
import SpotifyIcon from "/icons/spotify.svg";
import React from "react";
import MusicLinkSection from "./MusicLinkSection";

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};

function MusicSection(props: Props) {
  return (
    <MusicLinkSection
      backgroundColor={props.backgroundColor}
      reference={props.reference}
      titleicon={MusicIcon}
      linkicon={SpotifyIcon}
      titlekey={"music_title"}
      messagekey={"music_message"}
      children={null}
    />
  );
}

export default MusicSection;
