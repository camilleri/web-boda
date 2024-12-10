import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for rotation effect
const rotateAnimation = keyframes`
  0% { transform: rotateZ(0deg); }
  20% { transform: rotateZ(15deg); }
  40% { transform: rotateZ(-15deg); }
  60% { transform: rotateZ(5deg); }
  80% { transform: rotateZ(-5deg); }
  100% { transform: rotateZ(0deg); }
`;

type IconProps = {
  isHovered?: boolean;
  size?: string;
  mobileSize?: string;
  src: string;
};

const IconStyle = styled.img<IconProps>`
  transition: background-color 0.3s, transform 0.3s;
  height: ${(props) => (props.size ? props.size : "2em")};
  @media (max-width: 768px) {
    height: ${(props) => props.mobileSize || props.size || "2em"};
  }

  ${(props) => (props.isHovered ? `transform: scale(1.1);` : null)}

  &.visible {
    animation: ${rotateAnimation} 1s ease-in-out 1 forwards; /* Runs once and keeps final state */
  }
`;

function RotatingIcon(props: IconProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has been triggered
  const iconRef = useRef(null);

  useEffect(() => {
    const reference = iconRef;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true); // Trigger the animation
          setHasAnimated(true); // Set flag so animation doesn't trigger again
        }
      },
      { threshold: 0.1 } // Trigger when 50% of the header is visible
    );

    if (reference && reference.current) {
      observer.observe(reference.current);
    }

    return () => {
      if (reference && reference.current) {
        observer.unobserve(reference.current);
      }
    };
  }, [hasAnimated]); // Depend on `hasAnimated` to ensure the effect triggers only once

  return (
    <IconStyle
      ref={iconRef}
      {...props}
      className={isVisible ? "visible" : ""}
    />
  );
}

export default RotatingIcon;
