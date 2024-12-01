import { Trans, useTranslation } from "react-i18next";
import FlexContainer from "./style_components/FlexContainer";
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
import Box from "./style_components/Box";
import BankIcon from "/icons/bank_2.svg";
import RevolutIcon from "/icons/revolut_text.svg";
import PayPalIcon from "/icons/paypal.svg";
import TextWithIcon from "./TextWithIcon";
import TextWithLink from "./TextWithLink";

function GiftSection() {
  const { t } = useTranslation();

  const bankIban = "ES09 1583 0001 1191 1115 3998";
  const paypal = "https://paypal.me/mariaidavid";
  const revolut = "https://revolut.me/mmarcoterraes";

  return (
    <FlexContainer
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Spacer top={outerSectionSpacer} />
      <Text
        fontSize={titleSize}
        fontSizeMobile={titleSizeMobile}
        fontWeight={titleWeight}
        textAlign="center"
      >
        {t("gift_title")}
      </Text>
      <Spacer top={innerSectionSpacer} />
      <Box width={boxWidth} widthMobile={boxWidthMobile}>
        <Text
          fontSize={textSize}
          fontSizeMobile={textSizeMobile}
          textAlign="center"
        >
          <Trans i18nKey="gift_message" />
        </Text>
        <Spacer top={innerSectionSpacer} bottom={innerSectionSpacer} />
        <FlexContainer width="100%" justifyContent="center">
          <TextWithIcon icon={BankIcon} text={bankIban} />
        </FlexContainer>
        <Spacer top={innerSectionSpacer} bottom={innerSectionSpacer} />
        <FlexContainer width="100%" justifyContent="center">
          <TextWithLink
            icon={PayPalIcon}
            iconSize="1.7em"
            iconSizeMobile={"1.1em"}
            text={paypal}
          />
          <Spacer left="32px" />
          <TextWithLink
            icon={RevolutIcon}
            iconSize="1.1em"
            iconSizeMobile={"0.7em"}
            text={revolut}
          />
        </FlexContainer>
      </Box>
      <Spacer top={innerSectionSpacer} />
    </FlexContainer>
  );
}

export default GiftSection;
