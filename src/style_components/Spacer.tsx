import styled from "styled-components";

// Define a type for the padding props
interface SpacerProps {
  top?: string;
  mobileTop?: string;
  bottom?: string;
  mobileBottom?: string;
  left?: string;
  mobileLeft?: string;
  right?: string;
  mobileRight?: string;
}

const Spacer = styled.div<SpacerProps>`
  padding-top: ${(props) => props.top || "0px"};
  padding-bottom: ${(props) => props.bottom || "0px"};
  padding-left: ${(props) => props.left || "0px"};
  padding-right: ${(props) => props.right || "0px"};

  @media (max-width: 768px) {
    padding-top: ${(props: SpacerProps) =>
      props.mobileTop || props.top || "0px"};
    padding-bottom: ${(props: SpacerProps) =>
      props.mobileBottom || props.bottom || "0px"};
    padding-left: ${(props: SpacerProps) =>
      props.mobileLeft || props.left || "0px"};
    padding-right: ${(props: SpacerProps) =>
      props.mobileRight || props.right || "0px"};
  }
`;

export default Spacer;
