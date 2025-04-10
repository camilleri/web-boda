import RotatingIcon from "./RotatingIcon";
import {
  boxWidth,
  boxWidthMobile,
  innerSectionSpacer,
  outerSectionSpacer,
  textSize,
  textSizeMobile,
  titleWeight,
} from "./style_components/constants";
import Section from "./style_components/Section";
import Spacer from "./style_components/Spacer";
import SectionIcon from "/icons/venue-section.svg";
import Text from "./style_components/Text";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Box from "./style_components/Box";
import FlexContainer from "./style_components/FlexContainer";

const Circle = styled.div`
  position: relative;
  left: 12px;
  width: 12px;
  height: 12px;
  border: 3px solid;
  border-radius: 50%;
  z-index: 1;
`;

const Event = styled.div`
  position: relative;
  padding-bottom: 1em;
  display: flex;
  align-items: center;

  /* Create a line between circles */
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 28px; /* position the line in the center of the circle */
    left: 19px;
    width: 3px;
    background-color: black;
    height: calc(100% - 14px); /* Adjust height between circles */

    @media (max-width: 768px) {
      top: 20px; /* position the line in the center of the circle */
      height: calc(100% - 16px); /* Adjust height between circles */
    }
  }
`;

const LastEvent = styled.div`
  position: relative;
  padding-bottom: 1em;
  display: flex;
  align-items: center;
`;

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};

function TimelineSection(props: Props) {
  const { t } = useTranslation();

  return (
    <Section
      backgroundColor={props.backgroundColor}
      reference={props.reference}
    >
      <Spacer top={outerSectionSpacer} />
      <RotatingIcon src={SectionIcon} size="4em" mobileSize="5vh" />
      <Spacer bottom={innerSectionSpacer} />
      <Text
        fontSize={textSize}
        fontSizeMobile={textSizeMobile}
        fontWeight={titleWeight}
      >
        {t("timeline_title")}
      </Text>
      <Spacer bottom={innerSectionSpacer} />
      <Box width={boxWidth} widthMobile={boxWidthMobile}>
        <FlexContainer width="100%" justifyContent="center">
          <div>
            <Event>
              <Circle />
              <Spacer left="1.5em" mobileLeft="1em" />
              <Text
                fontSize={textSize}
                fontSizeMobile={textSizeMobile}
                fontWeight={"bold"}
              >
                12:00
              </Text>
              <Spacer left="1em" />
              <Text fontSize={textSize} fontSizeMobile={textSizeMobile}>
                {t("timeline_reception")}
              </Text>
            </Event>
            <Event>
              <Circle />
              <Spacer left="1.5em" mobileLeft="1em" />
              <Text
                fontSize={textSize}
                fontSizeMobile={textSizeMobile}
                fontWeight={"bold"}
              >
                12:30
              </Text>
              <Spacer left="1.5em" mobileLeft="1em" />
              <Text fontSize={textSize} fontSizeMobile={textSizeMobile}>
                {t("timeline_ceremonia")}
              </Text>
            </Event>
            <Event>
              <Circle />
              <Spacer left="1.5em" mobileLeft="1em" />
              <Text
                fontSize={textSize}
                fontSizeMobile={textSizeMobile}
                fontWeight={"bold"}
              >
                13:30
              </Text>
              <Spacer left="1.5em" mobileLeft="1em" />
              <Text fontSize={textSize} fontSizeMobile={textSizeMobile}>
                {t("timeline_cocktail")}
              </Text>
            </Event>
            <Event>
              <Circle />
              <Spacer left="1.5em" mobileLeft="1em" />
              <Text
                fontSize={textSize}
                fontSizeMobile={textSizeMobile}
                fontWeight={"bold"}
              >
                15:30
              </Text>
              <Spacer left="1.5em" mobileLeft="1em" />
              <Text fontSize={textSize} fontSizeMobile={textSizeMobile}>
                {t("timeline_lunch")}
              </Text>
            </Event>
            <Event>
              <Circle />
              <Spacer left="1.5em" mobileLeft="1em" />
              <Text
                fontSize={textSize}
                fontSizeMobile={textSizeMobile}
                fontWeight={"bold"}
              >
                18:00
              </Text>
              <Spacer left="1.5em" mobileLeft="1em" />
              <Text fontSize={textSize} fontSizeMobile={textSizeMobile}>
                {t("timeline_folk")}
              </Text>
            </Event>
            <Event>
              <Circle />
              <Spacer left="1.5em" mobileLeft="1em" />
              <Text
                fontSize={textSize}
                fontSizeMobile={textSizeMobile}
                fontWeight={"bold"}
              >
                18:30
              </Text>
              <Spacer left="1.5em" mobileLeft="1em" />
              <Text fontSize={textSize} fontSizeMobile={textSizeMobile}>
                {t("timeline_party")}
              </Text>
            </Event>
            <Event>
              <Circle />
              <Spacer left="1.5em" mobileLeft="1em" />
              <Text
                fontSize={textSize}
                fontSizeMobile={textSizeMobile}
                fontWeight={"bold"}
              >
                21:00
              </Text>
              <Spacer left="1.5em" mobileLeft="1em" />
              <Text fontSize={textSize} fontSizeMobile={textSizeMobile}>
                {t("timeline_resopo")}
              </Text>
            </Event>
            <LastEvent>
              <Circle />
              <Spacer left="1.5em" mobileLeft="1em" />
              <Text
                fontSize={textSize}
                fontSizeMobile={textSizeMobile}
                fontWeight={"bold"}
              >
                00:00
              </Text>
              <Spacer left="1.5em" mobileLeft="1em" />
              <Text fontSize={textSize} fontSizeMobile={textSizeMobile}>
                {t("timeline_end")}
              </Text>
            </LastEvent>
          </div>
        </FlexContainer>
      </Box>
      <Spacer top={outerSectionSpacer} />
    </Section>
  );
}

export default TimelineSection;
