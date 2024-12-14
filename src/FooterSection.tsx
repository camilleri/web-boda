import styled from "styled-components";
import Section from "./style_components/Section";
import Text from "./style_components/Text";
import { outerSectionSpacer } from "./style_components/constants";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import { Trans, useTranslation } from "react-i18next";
import useIsMobile from "./hooks/useIsMobile";

const LogoImage = styled.img`
  background-position: center top; /* Horizontally and vertically center */
  height: 100%;
  width: 72px;
  object-fit: contain;

  /* Adjust for smaller screens (mobile) */
  @media (max-width: 768px) {
  }
`;

const StyledA = styled.a<{
  textColor: string;
}>`
  color: ${(props) => props.textColor || "black"};
  text-decoration: none;
  font-size: 2vh;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.5vh;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const Footer = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const VerticalSeparation = styled.div<{
  textColor: string;
}>`
  border-right: 2px solid ${(props) => props.textColor || "black"};
  height: 2vh;
  margin-top: 4px;
  @media (max-width: 768px) {
    margin-top: 3px;
    height: 1.5vh;
  }
`;

type Props = {
  backgroundColor: string;
  textColor: string;
  separationColor: string;
};
function FooterSection(props: Props) {
  useTranslation();
  const isMobile = useIsMobile();

  return (
    <Section backgroundColor={props.backgroundColor}>
      <Footer>
        <Spacer top="0.5em" bottom="0.5em" left="16px" right="16px">
          <FlexContainer width="100%" justifyContent="space-between">
            <FlexContainer
              justifyContent={isMobile ? "space-between" : "flex-start"}
              width="100%"
              alignItems="center"
            >
              <Spacer top={outerSectionSpacer} />
              <Text
                fontFamily="Roboto Flex, sans-serif"
                fontSize="1.5vh"
                fontSizeMobile="1.25vh"
                color={props.textColor}
              >
                <Trans i18nKey="footer_designed" />
                <FlexContainer alignContent="center">
                  <StyledA
                    textColor={props.textColor}
                    href="https://www.linkedin.com/in/maria-marco-terraes-9148b54b/"
                    target="_blank"
                  >
                    Maria
                  </StyledA>
                  <Spacer left="0.5em" right="0.5em">
                    <VerticalSeparation textColor={props.separationColor} />
                  </Spacer>
                  <StyledA
                    textColor={props.textColor}
                    href="https://www.linkedin.com/in/david-palacios-piqueres-a3386835/"
                    target="_blank"
                  >
                    David
                  </StyledA>
                </FlexContainer>
              </Text>
              <Spacer left="2em" mobileLeft="1em" />
              <Text
                fontFamily="Roboto Flex, sans-serif"
                fontSize="1.5vh"
                fontSizeMobile="1.25vh"
                color={props.textColor}
              >
                <Trans i18nKey="footer_aknowledgement" />
                <FlexContainer alignContent="center">
                  <StyledA
                    textColor={props.textColor}
                    href="https://www.instagram.com/anaiestudio/"
                    target="_blank"
                  >
                    anai estudio
                  </StyledA>
                  <Spacer left="0.5em" right="0.5em">
                    <VerticalSeparation textColor={props.separationColor} />
                  </Spacer>
                  <StyledA
                    textColor={props.textColor}
                    href="https://www.instagram.com/frankeywood/"
                    target="_blank"
                  >
                    Fran Nicolás
                  </StyledA>
                </FlexContainer>
              </Text>
            </FlexContainer>

            {!isMobile && (
              <FlexContainer alignContent="center">
                <LogoImage src="/favicon.svg" />
              </FlexContainer>
            )}
          </FlexContainer>
        </Spacer>
      </Footer>
    </Section>
  );
}

export default FooterSection;
