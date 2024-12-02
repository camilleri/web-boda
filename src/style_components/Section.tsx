import FlexContainer from "./FlexContainer";

type SectionProps = {
  backgroundColor: string;
  children: React.ReactNode;
  reference?: React.RefObject<HTMLDivElement>;
};
function Section(props: SectionProps) {
  return (
    <FlexContainer
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      backgroundColor={props.backgroundColor}
      width="100%"
      ref={props.reference}
    >
      {props.children}
    </FlexContainer>
  );
}

export default Section;
