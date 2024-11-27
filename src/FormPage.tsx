import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import FlexContainer from "./style_components/FlexContainer";
import Spacer from "./style_components/Spacer";
import { mobileHeaderHeight, headerHeight } from "./style_components/constants";

// Declare Tally as a global variable
declare global {
  interface Window {
    Tally: any;
  }
}

const FormPage = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;

  const getTallySrc = () => {
    switch (language) {
      case "en":
        return "https://tally.so/embed/w7Jaaz?hideTitle=1&transparentBackground=1&dynamicHeight=1";
      case "es":
        return "https://tally.so/embed/mV9a6E?hideTitle=1&transparentBackground=1&dynamicHeight=1";
      default:
        return "https://tally.so/embed/w7Jaaz?hideTitle=1&transparentBackground=1&dynamicHeight=1";
    }
  };

  // The code below will load the embed
  useEffect(() => {
    const widgetScriptSrc = "https://tally.so/widgets/embed.js";

    const load = () => {
      // Load Tally embeds
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
        return;
      }

      // Fallback if window.Tally is not available
      document
        .querySelectorAll("iframe[data-tally-src]:not([src])")
        .forEach((iframeEl) => {
          const iframe = iframeEl as HTMLIFrameElement;
          iframe.src = iframe.dataset.tallySrc || "";
        });
    };

    // If Tally is already loaded, load the embeds
    if (typeof window.Tally !== "undefined") {
      load();
      return;
    }

    // If the Tally widget script is not loaded yet, load it
    if (document.querySelector(`script[src="${widgetScriptSrc}"]`) === null) {
      const script = document.createElement("script");
      script.src = widgetScriptSrc;
      script.onload = load;
      script.onerror = load;
      document.body.appendChild(script);
      return;
    }
  }, [language]);

  return (
    <FlexContainer
      width="100vw"
      height="100%"
      justifyContent="center"
      flexGrow={1}
    >
      <Spacer
        top={`calc(${headerHeight} + 42px)`}
        mobileTop={`calc(${mobileHeaderHeight} + 42px)`}
      />
      <iframe
        key={getTallySrc()}
        data-tally-src={getTallySrc()}
        loading="lazy"
        width="80%"
        height="1800px"
        frameBorder={0}
        title="RSVP Form"
      ></iframe>
    </FlexContainer>
  );
};

export default FormPage;
