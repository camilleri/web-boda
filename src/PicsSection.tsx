import PicsIcon from "/icons/pics.svg";
import DotsAppIcon from "/icons/dots.svg";
import PicsQR from "/qr.png";
import React from "react";
import LinkSection from "./LinkSection";
import Icon from "./style_components/Icon";

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};

function PicsSection(props: Props) {
  function openGooglePhotos() {
    window.open("https://qrco.de/bfsmRV", "_blank");
  }

  function isDesktop() {
    return !/mobile/i.test(navigator.userAgent);
  }

  function geticon() {
    if (isDesktop()) {
      return "";
    } else {
      return DotsAppIcon;
    }
  }

  function getLinkTitle() {
    if (isDesktop()) {
      return "";
    } else {
      return "pics_link";
    }
  }

  function getQR() {
    if (isDesktop()) {
      return <Icon size="7em" src={PicsQR} alt={"pics_link"} />;
    } else {
      return null;
    }
  }

  return (
    <LinkSection
      backgroundColor={props.backgroundColor}
      reference={props.reference}
      titleicon={PicsIcon}
      linkicon={geticon()}
      titlekey={"pics_title"}
      messagekey={"pics_message"}
      linkkey={getLinkTitle()}
      linkaction={openGooglePhotos}
      children={getQR()}
    />
  );
}

export default PicsSection;
