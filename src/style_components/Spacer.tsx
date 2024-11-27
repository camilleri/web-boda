import styled from "styled-components";

// Define a type for the padding props
interface SpacerProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const Spacer = styled.div<SpacerProps>`
  padding-top: ${(props) => props.top || "0px"};
  padding-bottom: ${(props) => props.bottom || "0px"};
  padding-left: ${(props) => props.left || "0px"};
  padding-right: ${(props) => props.right || "0px"};
`;

export default Spacer;
