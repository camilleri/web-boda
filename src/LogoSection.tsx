import styled from "styled-components";
import Section from "./style_components/Section";
import CountdownTimer from "./countdown/CountdownTimer";
import Box from "./style_components/Box";
import {
  boxWidth,
  boxWidthMobile,
  outerSectionSpacer,
} from "./style_components/constants";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";

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
      <Box width={boxWidth} widthMobile={boxWidthMobile}>
        <FlexContainer
          flexDirection="column"
          width="100%"
          justifyContent="center"
        >
          <LogoImage src="/logo_circular_color.svg" />
          <CountdownTimer targetDate="2025-04-12" />
          <Spacer top={outerSectionSpacer} />
        </FlexContainer>
      </Box>
    </Section>
  );
}

export default LogoSection;
