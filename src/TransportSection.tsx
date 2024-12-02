import { Trans, useTranslation } from "react-i18next";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";
import {
  boxWidth,
  boxWidthMobile,
  innerSectionSpacer,
  outerSectionSpacer,
  textSize,
  textSizeMobile,
  titleSize,
  titleSizeMobile,
  titleWeight,
} from "./style_components/constants";
import TransportIcon from "/icons/bus.svg";
import Icon from "./style_components/Icon";
import Box from "./style_components/Box";
import Section from "./style_components/Section";

type Props = {
  backgroundColor: string;
  reference: React.RefObject<HTMLDivElement>;
};
function TransportSection(props: Props) {
  useTranslation();

  return (
    <Section
      backgroundColor={props.backgroundColor}
      reference={props.reference}
    >
      <Spacer top={outerSectionSpacer} />
      <Icon src={TransportIcon} size="4em" />
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
