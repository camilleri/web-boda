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
import useIsMobile from "./hooks/useIsMobile";

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};
function TransportSection(props: Props) {
  useTranslation();

  const isMobile = useIsMobile();

  return (
    <Section
      backgroundColor={props.backgroundColor}
      reference={props.reference}
    >
      <Spacer top={outerSectionSpacer} />
      <svg
        width={isMobile ? iconSizeMobile : "4em"}
        height={isMobile ? iconSizeMobile : "4em"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12V10Z"
          stroke-width="1"
          stroke="black"
        />
        <path
          d="M4 13H20"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="black"
        />
        <path
          d="M15.5 16H17"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="black"
        />
        <path
          d="M7 16H8.5"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="black"
        />
        <path
          d="M6 19.5V21C6 21.5523 6.44772 22 7 22H8.5C9.05228 22 9.5 21.5523 9.5 21V20"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="black"
        />
        <path
          d="M18 19.5V21C18 21.5523 17.5523 22 17 22H15.5C14.9477 22 14.5 21.5523 14.5 21V20"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="black"
        />
        <path
          d="M20 9H21C21.5523 9 22 9.44772 22 10V11C22 11.3148 21.8518 11.6111 21.6 11.8L20 13"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 9H3C2.44772 9 2 9.44772 2 10V11C2 11.3148 2.14819 11.6111 2.4 11.8L4 13"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="black"
        />
        <path d="M19.5 5H4.5" stroke-width="1.5" stroke-linecap="round" />
      </svg>
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
          textAlign="center"
        >
          <Trans i18nKey={"transport_message"} />
        </Text>
      </Box>
      <Spacer top={outerSectionSpacer} />
    </Section>
  );
}

export default TransportSection;
