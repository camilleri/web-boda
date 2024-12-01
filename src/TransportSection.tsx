import { Trans } from "react-i18next";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import Text from "./style_components/Text";
import {
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

function TransportSection() {
  return (<FlexContainer
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    backgroundColor="white"
  >
    <Spacer top={outerSectionSpacer} />
    <Icon src={TransportIcon} size="4em" />
    <Spacer bottom={innerSectionSpacer} />
    <Text
      fontSize={titleSize}
      fontSizeMobile={titleSizeMobile}
      fontWeight={titleWeight}>
      <Trans i18nKey={"transport_title"} />
    </Text>
    <Spacer top={innerSectionSpacer} />
    <Text
      fontSize={textSize}
      fontSizeMobile={textSizeMobile}
      textAlign="center">
      <Trans i18nKey={"transport_message"} />
    </Text>
    <Spacer top={outerSectionSpacer} />
  </FlexContainer>
  );
}

export default TransportSection;
