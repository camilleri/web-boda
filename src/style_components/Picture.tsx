import styled from "styled-components";

type PictureProps = {
  background: string;
};

const PictureStyle = styled.div<PictureProps>`
  background: ${(props) => props.background};
  height: 30vh;
  background-size: cover;
  width: 100%;
  background-position: center center;
  object-fit: contain;
`

function PictureSection(props: PictureProps) {
  return (
    <PictureStyle
      background={props.background}
    />
  );
}

export default PictureSection;
