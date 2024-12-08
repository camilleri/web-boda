import { useState } from "react";
import { useNavigate } from "react-router-dom";

type ScrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => void;

const useScrollToSection = (): [
  React.RefObject<HTMLDivElement> | null,
  (pendingScroll: React.RefObject<HTMLDivElement> | null) => void,
  ScrollToSection
] => {
  const navigate = useNavigate();
  const [pendingScroll, setPendingScroll] =
    useState<React.RefObject<HTMLDivElement> | null>(null);

  const scrollToSection: ScrollToSection = (sectionRef: any) => {
    if (location.pathname !== "/") {
      navigate("/");
      setPendingScroll(sectionRef);
    } else {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return [pendingScroll, setPendingScroll, scrollToSection];
}


export default useScrollToSection;