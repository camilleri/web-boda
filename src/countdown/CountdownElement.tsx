import { Trans } from "react-i18next";
import Text from "../style_components/Text";
import FlexContainer from "../style_components/FlexContainer";
import { colorDarkGreen } from "../style_components/constants";

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
          fontSizeMobile="5vw"
          textAlign="center"
          color={colorDarkGreen}
          width="2em"
        >
          {props.count}
        </Text>
        <Text
          fontSize="1.2em"
          fontSizeMobile="3vw"
          textAlign="center"
          fontWeight="600"
          color={colorDarkGreen}
        >
          <Trans i18nKey={props.textKey} />
        </Text>
      </FlexContainer>
    </>
  );
}

export default CountdownElement;
