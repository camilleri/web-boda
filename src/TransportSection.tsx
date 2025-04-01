import { Trans, useTranslation } from "react-i18next";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";
import {
  boxWidth,
  boxWidthMobile,
  iconSizeMobile,
  innerSectionSpacer,
  outerSectionSpacer,
  textSize,
  textSizeMobile,
  titleSize,
  titleSizeMobile,
  titleWeight,
} from "./style_components/constants";
import Box from "./style_components/Box";
import Section from "./style_components/Section";
import RotatingIcon from "./RotatingIcon";
import BusIcon from "/icons/bus.svg";
import FlexContainer from "./style_components/FlexContainer";
import styled from "styled-components";
import useIsMobile from "./hooks/useIsMobile";
import Icon from "./style_components/Icon";

import ExternalLinkIcon from "/icons/external-link.svg";

const PLaceContainer = styled.tr`
  cursor: pointer;
  align-items: center;
`;

const Cell = styled.td`
  align-items: center;
  padding-left: 1.5em;
  padding-bottom: 0.5em;

  @media (max-width: 768px) {
    padding-left: 0.5em;
  }
`;

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};
function TransportSection(props: Props) {
  useTranslation();
  const isMobile = useIsMobile();

  async function openParadaSueca() {
    window.open("https://maps.app.goo.gl/VT9yTj9QERgj7HgW7", "_blank");
  }

  async function openParadaOliva() {
    window.open("https://maps.app.goo.gl/tynn1MVHZvbuizH99", "_blank");
  }

  async function openParadaOlivaPlatja() {
    window.open("https://maps.app.goo.gl/3JAwB7WT7Uk7NQZA8", "_blank");
  }

  async function openParadaGandia() {
    window.open("https://maps.app.goo.gl/jfqiUoBqvEpn96Sr9", "_blank");
  }

  return (
    <Section
      backgroundColor={props.backgroundColor}
      reference={props.reference}
    >
      <Spacer top={outerSectionSpacer} />
      <RotatingIcon src={BusIcon} size="4em" mobileSize={iconSizeMobile} />
      <Spacer bottom={innerSectionSpacer} />
      <Text
        fontSize={titleSize}
        fontSizeMobile={titleSizeMobile}
        fontWeight={titleWeight}
      >
        <Trans i18nKey={"transport_title"} />
      </Text>
      <Spacer top={innerSectionSpacer} />
      <Box width={boxWidth} widthMobile={boxWidthMobile}>
        <Text
          fontSize={textSize}
          fontSizeMobile={textSizeMobile}
          textAlign="left"
        >
          <Trans i18nKey={"transport_message"} />
        </Text>
        <Spacer top="2em" />
        <FlexContainer width="100%" flexDirection="column" alignItems="center">
          <table>
            <PLaceContainer onClick={openParadaSueca}>
              <Cell>
                <Text
                  fontSize={textSize}
                  fontSizeMobile={textSizeMobile}
                  textAlign="left"
                >
                  Sueca
                </Text>
              </Cell>
              <Cell>
                <Text
                  fontSize={textSize}
                  fontSizeMobile={textSizeMobile}
                  textAlign="left"
                  textWrap="nowrap"
                >
                  10:45 am
                </Text>
              </Cell>
              <Cell>
                <FlexContainer alignItems="center">
                  <Text
                    fontSize={textSize}
                    fontSizeMobile={textSizeMobile}
                    textAlign="left"
                  >
                    <Trans
                      i18nKey={"parada_sueca"}
                      components={{
                        link: (
                          <Icon
                            src={ExternalLinkIcon}
                            size="1em"
                            mobileSize="2vh"
                            verticalAlign="middle"
                          />
                        ),
                      }}
                    />
                  </Text>
                </FlexContainer>
              </Cell>
            </PLaceContainer>
            <PLaceContainer onClick={openParadaGandia}>
              <Cell>
                <Text
                  fontSize={textSize}
                  fontSizeMobile={textSizeMobile}
                  textAlign="left"
                >
                  Gandia
                </Text>
              </Cell>
              <Cell>
                <Text
                  fontSize={textSize}
                  fontSizeMobile={textSizeMobile}
                  textAlign="left"
                  textWrap="nowrap"
                >
                  11:30 am
                </Text>
              </Cell>
              <Cell>
                <Text
                  fontSize={textSize}
                  fontSizeMobile={textSizeMobile}
                  textAlign="left"
                >
                  <Trans
                    i18nKey={"parada_gandia"}
                    components={{
                      link: (
                        <Icon
                          src={ExternalLinkIcon}
                          size="1em"
                          mobileSize="2vh"
                          verticalAlign="middle"
                        />
                      ),
                    }}
                  />
                </Text>
              </Cell>
            </PLaceContainer>
            <PLaceContainer onClick={openParadaOlivaPlatja}>
              <Cell>
                <Text
                  fontSize={textSize}
                  fontSizeMobile={textSizeMobile}
                  textAlign="left"
                  textWrap={isMobile ? "normal" : "nowrap"}
                >
                  <Trans i18nKey={"oliva_beach"} />
                </Text>
              </Cell>
              <Cell>
                <Text
                  fontSize={textSize}
                  fontSizeMobile={textSizeMobile}
                  textAlign="left"
                  textWrap="nowrap"
                >
                  11:30 am
                </Text>
              </Cell>
              <Cell>
                <Text
                  fontSize={textSize}
                  fontSizeMobile={textSizeMobile}
                  textAlign="left"
                >
                  <Trans
                    i18nKey={"parada_oliva_beach"}
                    components={{
                      link: (
                        <Icon
                          src={ExternalLinkIcon}
                          size="1em"
                          mobileSize="2vh"
                          verticalAlign="middle"
                        />
                      ),
                    }}
                  />
                </Text>
              </Cell>
            </PLaceContainer>
            <PLaceContainer onClick={openParadaOliva}>
              <Cell>
                <Text
                  fontSize={textSize}
                  fontSizeMobile={textSizeMobile}
                  textAlign="left"
                >
                  Oliva
                </Text>
              </Cell>
              <Cell>
                <Text
                  fontSize={textSize}
                  fontSizeMobile={textSizeMobile}
                  textAlign="left"
                  textWrap="nowrap"
                >
                  11:35 am
                </Text>
              </Cell>
              <Cell>
                <Text
                  fontSize={textSize}
                  fontSizeMobile={textSizeMobile}
                  textAlign="left"
                >
                  <Trans
                    i18nKey={"parada_oliva"}
                    components={{
                      link: (
                        <Icon
                          src={ExternalLinkIcon}
                          size="1em"
                          mobileSize="2vh"
                          verticalAlign="middle"
                        />
                      ),
                    }}
                  />
                </Text>
              </Cell>
            </PLaceContainer>
          </table>
          <Spacer top="1em" />
          <Text
            fontSize={textSize}
            fontSizeMobile={textSizeMobile}
            textAlign="left"
          >
            <Trans i18nKey={"return_message"} />
          </Text>
        </FlexContainer>
      </Box>
      <Spacer top={outerSectionSpacer} />
    </Section>
  );
}

export default TransportSection;
