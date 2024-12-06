import styled from "styled-components";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import { Trans, useTranslation } from "react-i18next";
import useIsMobile from "./hooks/useIsMobile";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MenuLink = styled.div`
  color: white; /* Set the text color */
  font-size: 24px;
  cursor: pointer;

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
};
function Menu(props: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  useTranslation();

  const [pendingScroll, setPendingScroll] =
    useState<React.RefObject<HTMLDivElement> | null>(null);

  // Function to handle scroll
  const scrollToSection = (sectionRef: any) => {
    if (location.pathname !== "/") {
      navigate("/");
      setPendingScroll(sectionRef);
    } else {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
  }, [pendingScroll, location]); // Trigger this effect when the location changes

  return (
    !isMobile && (
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
          <MenuLink onClick={() => scrollToSection(props.supportRef)}>
            <Trans i18nKey="support_title" />
          </MenuLink>
        </Spacer>
      </FlexContainer>
    )
  );
}

export default Menu;
