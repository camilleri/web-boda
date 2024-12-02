import styled from "styled-components";
import Section from "./style_components/Section";
import CountdownTimer from "./countdown/CountdownTimer";

const LogoImage = styled.img`
  background-position: center top; /* Horizontally and vertically center */
  height: 100%;
  width: 100%;
  object-fit: contain;

  /* Adjust for smaller screens (mobile) */
  @media (max-width: 768px) {
  }
`;

type Props = {
  backgroundColor: string;
};
function LogoSection(props: Props) {
  return (
    <Section backgroundColor={props.backgroundColor}>
      <LogoImage src="/logo_circular_color.png" />
      <CountdownTimer targetDate="2025-04-12" />
    </Section>
  );
}

export default LogoSection;
