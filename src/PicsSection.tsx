import PicsIcon from "/icons/pics.svg";
import DotsAppIcon from "/icons/dots.svg";
import PicsQR from "/icons/picsqr.svg";
import React from "react";
import LinkSection from "./LinkSection";
import Icon from "./style_components/Icon";

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};


function PicsSection(props: Props) {

  function openDotsApp() {
    const appLink = "https://onelifesocial.page.link/fpAv"; // Universal Link
    const appStoreLink = "https://apps.apple.com/es/app/unfiltered-v%C3%ADdeos-reales/id6449039420"; // iOS App Store URL
    const playStoreLink = "https://play.google.com/store/apps/details?id=social.onelife"; // Android Play Store URL
    const fallbackPage = "https://dotstheapp.com/"; // Desktop fallback (e.g., QR code)
  
  
    if (/android/i.test(navigator.userAgent)) {
      // Android: Try to open the app
      window.location.href = appLink;
  
      // Fallback to Google Play
      setTimeout(() => {
        window.location.href = playStoreLink;
      }, 2000);
    } else if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      // iOS: Try to open the app
      window.location.href = appLink;
  
      // Fallback to App Store
      setTimeout(() => {
        window.location.href = appStoreLink;
      }, 2000);
    } else {
      // Desktop: Show fallback page
      window.open(fallbackPage, "_blank");
    }
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
      return <Icon size="7em" src={PicsQR} alt={"pics_link"}/>;
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
      linkaction={openDotsApp}
      children={getQR()}/>
  );
}

export default PicsSection;
