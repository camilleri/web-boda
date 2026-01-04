import { useTranslation } from "react-i18next";
import FlexContainer from "./style_components/FlexContainer";
import styled from "styled-components";

const IframeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  display: block;
`;

const VideoPage = () => {
  useTranslation();

  // Cambia esta URL por la ruta de tu HTML
  const iframeSrc = "palpit/palpit.html";

  return (
    <FlexContainer
      width="100vw"
      height="100vh"
      justifyContent="center"
      flexGrow={1}
    >
      <IframeContainer>
        <StyledIframe
          src={iframeSrc}
          title="Video Content"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </IframeContainer>
    </FlexContainer>
  );
};

export default VideoPage;
