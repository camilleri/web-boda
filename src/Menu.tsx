import styled from "styled-components";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import { Trans, useTranslation } from "react-i18next";
import useIsMobile from "./hooks/useIsMobile";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Icon from "./style_components/Icon";
import ArrowBackIcon from "/icons/arrow_back.svg";
import { colorMenuText, colorDarkGreen } from "./style_components/constants";

const IconContainer = styled(Icon)`
  background-color: ${colorDarkGreen};
  border-radius: 8px;
`;

const MenuLink = styled.div`
  color: ${colorMenuText};
  font-size: 0.8em;
  cursor: pointer;
  font-family: "Roboto Flex", sans-serif;
  font-weight: 300;

  /* Hover effect */
  &:hover {
    transform: scale(1.05); /* Slightly enlarge the link */
  }

  /* Focus effect */
  &:focus {
    font-weight: 700;
  }

  @media (max-width: 768px) {
  }
`;

type Props = {
  homeRef: React.RefObject<HTMLDivElement>;
  venueRef: React.RefObject<HTMLDivElement>;
  transportRef: React.RefObject<HTMLDivElement>;
  timelineRef: React.RefObject<HTMLDivElement>;
  accommodationRef: React.RefObject<HTMLDivElement>;
  formRef: React.RefObject<HTMLDivElement>;
  supportRef: React.RefObject<HTMLDivElement>;
  musicRef: React.RefObject<HTMLDivElement>;
  picsRef: React.RefObject<HTMLDivElement>;
};

function Menu(props: Props) {
  const location = useLocation();
  const isMobile = useIsMobile();
  const isHome = location.pathname === "/";
  useTranslation();

  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash === "#venue" && props.venueRef.current) {
      props.venueRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#transport" && props.transportRef.current) {
      props.transportRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#timeline" && props.timelineRef.current) {
      props.timelineRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#form" && props.formRef.current) {
      props.formRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#music" && props.musicRef.current) {
      props.musicRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#pics" && props.picsRef.current) {
      props.picsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#support" && props.supportRef.current) {
      props.supportRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (!location.hash && props.homeRef.current) {
      props.homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [
    location,
    props.homeRef,
    props.formRef,
    props.musicRef,
    props.picsRef,
    props.supportRef,
    props.transportRef,
    props.venueRef,
    props.timelineRef,
  ]);

  return isMobile ? (
    isHome ? (
      <div />
    ) : (
      <FlexContainer>
        <Spacer left="8px">
          <FlexContainer onClick={() => navigate("/#home")}>
            <IconContainer src={ArrowBackIcon} size="4em" mobileSize="1.5em" />
          </FlexContainer>
        </Spacer>
      </FlexContainer>
    )
  ) : (
    <FlexContainer>
      <Spacer left="16px">
        <MenuLink onClick={() => navigate("/")}>
          <Trans i18nKey="home" />
        </MenuLink>
      </Spacer>
      <Spacer left="24px">
        <MenuLink onClick={() => navigate("/#venue")}>
          <Trans i18nKey="venue_title" />
        </MenuLink>
      </Spacer>
      <Spacer left="24px">
        <MenuLink onClick={() => navigate("/#transport")}>
          <Trans i18nKey="transport_title" />
        </MenuLink>
      </Spacer>
      <Spacer left="24px">
        <MenuLink onClick={() => navigate("/#timeline")}>
          <Trans i18nKey="timeline_title" />
        </MenuLink>
      </Spacer>
      <Spacer left="24px">
        <MenuLink onClick={() => navigate("/#form")}>
          <Trans i18nKey="rsvp_form" />
        </MenuLink>
      </Spacer>
      <Spacer left="24px">
        <MenuLink onClick={() => navigate("/#music")}>
          <Trans i18nKey="music_title" />
        </MenuLink>
      </Spacer>
      <Spacer left="24px">
        <MenuLink onClick={() => navigate("/#pics")}>
          <Trans i18nKey="pics_title" />
        </MenuLink>
      </Spacer>
      <Spacer left="24px">
        <MenuLink onClick={() => navigate("/#support")}>
          <Trans i18nKey="support_title" />
        </MenuLink>
      </Spacer>
      <Spacer left="24px">
        <MenuLink onClick={() => navigate("/video")}>
          <Trans i18nKey="video_title" />
        </MenuLink>
      </Spacer>
    </FlexContainer>
  );
}

export default Menu;
