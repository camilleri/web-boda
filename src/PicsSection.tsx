import PicsIcon from "/icons/pics.svg";
import DotsAppIcon from "/icons/dots.svg";
import React from "react";
import LinkSection from "./LinkSection";

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};


function PicsSection(props: Props) {

  async function openDotsApp() {
    window.open(
      "https://open.spotify.com/playlist/2ySxHhGeCxnUtt8UqMQxpn?si=b5d056412d5d4174",
      "_blank"
    );
  }

  return (
    <LinkSection
      backgroundColor={props.backgroundColor}
      reference={props.reference}
      titleicon={PicsIcon} 
      linkicon={DotsAppIcon}
      titlekey={"pics_title"}
      messagekey={"pics_message"}
      linkkey={"pics_link"}
      linkaction={openDotsApp}
    />
  );
}

export default PicsSection;
