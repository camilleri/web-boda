import { useTranslation } from "react-i18next";
import FlexContainer from "./style_components/FlexContainer";
import styled from "styled-components";
import useIsMobile from "./hooks/useIsMobile";

const IframeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIframe = styled.iframe<{ $zoom: number; $isMobile: boolean }>`
  width: ${props => props.$isMobile ? '320px' : '100%'};
  height: 100%;
  border: none;
  display: block;
  zoom: ${props => props.$zoom};
`;

const VideoPage = () => {
  useTranslation();
  const isMobile = useIsMobile();

  const iframeSrc = isMobile ? "/palpit/palpit_mobile.html" : "/palpit/palpit.html";
  const zoom = isMobile ? (typeof window !== 'undefined' ? window.innerWidth / 320 : 1) : 1;

  return (
    <FlexContainer
      width="100vw"
      height="100vh"
      justifyContent="center"
      flexGrow={1}
    >
      <IframeContainer>
        <StyledIframe
          $zoom={zoom}
          $isMobile={isMobile}
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
