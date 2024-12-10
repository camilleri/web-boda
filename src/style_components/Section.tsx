import styled from "styled-components";
import FlexContainer from "./FlexContainer";

const SectionStyle = styled(FlexContainer)``;

type SectionProps = {
  backgroundColor: string;
  children: React.ReactNode;
  reference?: React.RefObject<HTMLDivElement>;
};

function Section(props: SectionProps) {
  return (
    <SectionStyle
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      backgroundColor={props.backgroundColor}
      width="100%"
      ref={props.reference}
    >
      {props.children}
    </SectionStyle>
  );
}

export default Section;
