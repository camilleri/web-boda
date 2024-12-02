import { useState, useEffect } from "react";
import CountdownElement from "./CountdownElement";
import FlexContainer from "../style_components/FlexContainer";

type Props = {
  targetDate: string;
};

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
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
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
    <FlexContainer justifyContent="center">
      <CountdownElement count={timeLeft.days} textKey="days" />
      <CountdownElement count={timeLeft.hours} textKey="hours" />
      <CountdownElement count={timeLeft.minutes} textKey="minutes" />
      <CountdownElement count={timeLeft.seconds} textKey="seconds" />
    </FlexContainer>
  );
};

export default CountdownTimer;
