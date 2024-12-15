import styled from "styled-components";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import { Trans, useTranslation } from "react-i18next";
import useIsMobile from "./hooks/useIsMobile";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useScrollToSection from "./hooks/useScrollToSection";
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

  const [pendingScroll, setPendingScroll, scrollToSection] =
    useScrollToSection();

  useEffect(() => {
    if (pendingScroll && pendingScroll?.current && location.pathname === "/") {
      pendingScroll.current.scrollIntoView({ behavior: "smooth" });
      setPendingScroll(null);
    }
    // Wait for the location change and then scroll
    const targetElement = document.getElementById("target-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [setPendingScroll, pendingScroll, location]); // Trigger this effect when the location changes

  return isMobile ? (
    isHome ? (
      <div />
    ) : (
      <FlexContainer>
        <Spacer left="8px">
          <FlexContainer onClick={() => scrollToSection(props.homeRef)}>
            <IconContainer src={ArrowBackIcon} size="4em" mobileSize="1.5em" />
          </FlexContainer>
        </Spacer>
      </FlexContainer>
    )
  ) : (
    <FlexContainer>
      <Spacer left="16px">
        <MenuLink onClick={() => scrollToSection(props.homeRef)}>
          <Trans i18nKey="home" />
        </MenuLink>
      </Spacer>
      <Spacer left="24px">
        <MenuLink onClick={() => scrollToSection(props.venueRef)}>
          <Trans i18nKey="venue_title" />
        </MenuLink>
      </Spacer>
      <Spacer left="24px">
        <MenuLink onClick={() => scrollToSection(props.transportRef)}>
          <Trans i18nKey="transport_title" />
        </MenuLink>
      </Spacer>
      <Spacer left="24px">
        <MenuLink onClick={() => scrollToSection(props.formRef)}>
          <Trans i18nKey="rsvp_form" />
        </MenuLink>
      </Spacer>
      <Spacer left="24px">
        <MenuLink onClick={() => scrollToSection(props.musicRef)}>
          <Trans i18nKey="music_title" />
        </MenuLink>
      </Spacer>
      <Spacer left="24px">
        <MenuLink onClick={() => scrollToSection(props.picsRef)}>
          <Trans i18nKey="pics_title" />
        </MenuLink>
      </Spacer>
      <Spacer left="24px">
        <MenuLink onClick={() => scrollToSection(props.supportRef)}>
          <Trans i18nKey="support_title" />
        </MenuLink>
      </Spacer>
    </FlexContainer>
  );
}

export default Menu;
