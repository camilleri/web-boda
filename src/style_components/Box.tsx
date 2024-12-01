import styled from "styled-components";

interface BoxProps {
  width?: string;
  widthMobile?: string;
}
const Box = styled.div<BoxProps>`
  width: ${(props) => props.width || "100%"};

  @media (max-width: 768px) {
    width: ${(props: BoxProps) => props.widthMobile || "100%"};
  }
`;

export default Box;
