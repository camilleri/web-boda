import React, { useState, useEffect } from 'react';
import CountdownElement from './CountdownElement';
import FlexContainer from '../style_components/FlexContainer';
import Text from '../style_components/Text';
import { Trans } from 'react-i18next';
import { textSize, textSizeMobile } from "../style_components/constants";

type Props = {
    targetDate: string,
}

const CountdownTimer = (props: Props) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const target = new Date(props.targetDate).getTime();
            const difference = target - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const interval = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(interval);
    }, [props.targetDate]);


    return (
        <div >
            <Text
                fontSize={textSize}
                fontSizeMobile={textSizeMobile}
                textAlign="center"
                color="white">
                <Trans i18nKey="time_left" />
            </Text>
            <FlexContainer >
                <CountdownElement count={timeLeft.days} textKey="days" />
                <CountdownElement count={timeLeft.hours} textKey="hours" />
                <CountdownElement count={timeLeft.minutes} textKey="minutes" />
                <CountdownElement count={timeLeft.seconds} textKey="seconds" />
            </FlexContainer>
        </div >
    );
};

export default CountdownTimer;