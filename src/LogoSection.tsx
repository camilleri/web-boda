import styled from "styled-components";

const LogoDiv = styled.div`
  height: auto;
  width: 100vw;
`;

const LogoImage = styled.img`
  background-position: center top; /* Horizontally and vertically center */
  height: 100%;
  width: 100%;
  object-fit: contain;

  /* Adjust for smaller screens (mobile) */
  @media (max-width: 768px) {
  }
`;

function LogoSection() {
  return (
    <LogoDiv>
      <LogoImage src="/logo_circular_color.png" />
    </LogoDiv>
  );
}

export default LogoSection;
