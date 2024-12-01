import styled from "styled-components";

type IconProps = {
  isHovered?: boolean;
  size?: string;
  mobileSize?: string;
};

const Icon = styled.img<IconProps>`
    transition: background-color 0.3s, transform 0.3s; 
    height: ${(props) => (props.size ? props.size : "2em")};
    @media (max-width: 768px) {
       height: ${(props) => (props.mobileSize || props.size || "2em")};
    }

    ${(props) => (props.isHovered ? `transform: scale(1.1);` : null)}
  `;

export default Icon;
