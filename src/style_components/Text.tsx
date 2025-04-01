import styled from "styled-components";

interface TextProps {
  fontSize?: string; // Font size (e.g., '16px', '1.5rem')
  fontSizeMobile?: string; // Font size for mobile
  fontWeight?: string | number; // Font weight (e.g., 'normal', 'bold', 400)
  color?: string; // Text color (e.g., '#333', 'red')
  lineHeight?: string; // Line height (e.g., '1.5', '20px')
  textAlign?: "left" | "right" | "center" | "justify"; // Text alignment
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none"; // Text transformation
  fontFamily?: string; // Font family (e.g., 'Arial', 'Helvetica')
  margin?: string; // Margin around the text
  padding?: string; // Padding around the text
  inline?: boolean; // Display the text inline
  backgroundColor?: string;
  borderRadius?: string;
  width?: string;
  widthMobile?: string;
  textShadow?: string;
  textWrap?: string;
}

const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize || "24px"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: ${(props) => props.color || "#000"};
  line-height: ${(props) => props.lineHeight || "1.5"};
  text-align: ${(props) => props.textAlign || "left"};
  text-transform: ${(props) => props.textTransform || "none"};
  text-wrap: ${(props) => props.textWrap || "normal"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  display: ${(props) => (props.inline ? "inline" : "block")};
  font-family: ${(props) => props.fontFamily || "inherit"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  border-radius: ${(props) => props.borderRadius || "0"};
  width: ${(props) => props.width || "auto"};

  @media (max-width: 768px) {
    font-size: ${(props) => props.fontSizeMobile || props.fontSize || "20px"};
    width: ${(props) => props.widthMobile || props.width || "auto"};
  }

  text-shadow: ${(props) => props.textShadow || "none"};
`;

export default Text;
