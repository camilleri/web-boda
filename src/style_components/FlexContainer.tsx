import styled from "styled-components";

// Define the types for the props you want to pass to the flex container
interface FlexContainerProps {
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?:
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  alignContent?:
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "stretch";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string; // gap between flex items
  width?: string; // Optional width
  height?: string; // Optional height
  flexGrow?: number; // Optional flex-grow
  maxWidth?: string; // Optional max-width
  backgroundColor?: string; // Optional background color
  transition?: string; // Optional transition
  animation?: string;
  fontFamily?: string;
}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "stretch"};
  align-content: ${(props) => props.alignContent || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || "0"};
  width: ${(props) => props.width || null};
  height: ${(props) => props.height || "auto"};
  flex-grow: ${(props) => props.flexGrow || 0};
  max-width: ${(props) => props.maxWidth || "none"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  transition: ${(props) => props.transition || "none"};
  animation: ${(props) => props.animation || "none"};
  font-family: ${(props) => props.fontFamily || "inherit"};
`;

export default FlexContainer;
