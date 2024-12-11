import MusicIcon from "/icons/music.svg";
import SpotifyIcon from "/icons/spotify.svg";
import React from "react";
import LinkSection from "./LinkSection";

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};

function MusicSection(props: Props) {
  async function openSpotify() {
    window.open(
      "https://open.spotify.com/playlist/2ySxHhGeCxnUtt8UqMQxpn?si=b5d056412d5d4174",
      "_blank"
    );
  }

  return (
    <LinkSection
      backgroundColor={props.backgroundColor}
      reference={props.reference}
      titleicon={MusicIcon}
      linkicon={SpotifyIcon}
      titlekey={"music_title"}
      messagekey={"music_message"}
      linkkey={"music_list"}
      linkaction={openSpotify}
      children={null}
    />
  );
}

export default MusicSection;
