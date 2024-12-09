import styled from "styled-components";

type PictureProps = {
  background: string;
};

const PictureStyle = styled.div<PictureProps>`
  background: ${(props) => props.background};
  height: 60vh;
  background-size: cover;
  width: 100%;
  background-position: center center;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

function PictureSection(props: PictureProps) {
  return <PictureStyle background={props.background} />;
}

export default PictureSection;
