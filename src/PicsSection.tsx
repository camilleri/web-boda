import PicsIcon from "/icons/pics.svg";
import LogoWedshoots from "/icons/logo_wedshoots.svg";
import PicsQR from "/qr.png";
import React from "react";
import LinkSection from "./LinkSection";
import Icon from "./style_components/Icon";

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};

function PicsSection(props: Props) {
  function openWedShootsApp() {
    window.open(
      "http://www.wedshoots.com/download?albumId=ES24982e57",
      "_blank"
    );
  }

  function isDesktop() {
    return !/mobile/i.test(navigator.userAgent);
  }

  function geticon() {
    if (isDesktop()) {
      return "";
    } else {
      return LogoWedshoots;
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
      linkaction={openWedShootsApp}
    >
      {getQR()}
    </LinkSection>
    
  );
}

export default PicsSection;
