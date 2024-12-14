import { useTranslation } from "react-i18next";
import FlexContainer from "./style_components/FlexContainer";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FormPage = () => {
  useTranslation();

  return (
    <FlexContainer
      width="100vw"
      height="100vh"
      justifyContent="center"
      flexGrow={1}
    >
      <Img src="/laughing.gif" />
    </FlexContainer>
  );
};

export default FormPage;
