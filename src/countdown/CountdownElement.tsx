import { Trans } from 'react-i18next';
import Text from '../style_components/Text';
import Spacer from '../style_components/Spacer';
import FlexContainer from '../style_components/FlexContainer';


type LanguageProps = {
    count: number;
    textKey: string;
};


function CountdownElement(props: LanguageProps) {
    return <>
        <FlexContainer flexDirection='column'>
            <Text
                fontSize="3em"
                fontSizeMobile="8vw"
                textAlign="center"
                color="white">
                {props.count}
            </Text>
            <Text fontSize="1em"
                fontSizeMobile="4vw"
                textAlign="center"
                color="white">
                <Trans i18nKey={props.textKey} />
            </Text>
        </FlexContainer>
        <Spacer left='1em' mobileLeft='1em' />
    </>
}

export default CountdownElement;