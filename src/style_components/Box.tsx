import styled from "styled-components";
import { media } from "./Breakpoints";

interface BoxProps {
  width?: string;
  widthMobile?: string;
}
const Box = styled.div<BoxProps>`
  width: ${(props) => props.width || "100%"};

  ${media.mobile`
    width: ${(props: BoxProps) => props.widthMobile || "100%"}
  `}
`;

export default Box;
