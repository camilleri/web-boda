import { Trans } from "react-i18next";
import Text from "../style_components/Text";
import Spacer from "../style_components/Spacer";
import FlexContainer from "../style_components/FlexContainer";
import { colorLightGreen, colorOlive } from "../style_components/constants";

type LanguageProps = {
  count: number;
  textKey: string;
};

function CountdownElement(props: LanguageProps) {
  return (
    <>
      <FlexContainer flexDirection="column">
        <Text
          fontSize="3em"
          fontSizeMobile="4vw"
          textAlign="center"
          color={colorLightGreen}
          backgroundColor={colorOlive}
          borderRadius="50%"
          padding="8px"
          width="2em"
        >
          {props.count}
        </Text>
        <Text
          fontSize="1.2em"
          fontSizeMobile="3vw"
          textAlign="center"
          fontWeight="600"
          color={colorOlive}
        >
          <Trans i18nKey={props.textKey} />
        </Text>
      </FlexContainer>
      <Spacer left="1em" mobileLeft="1em" />
    </>
  );
}

export default CountdownElement;
