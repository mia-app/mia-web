import { useEffect } from "react";

export const useSetDocumentHeight = () => {
  const setDocHeight = () =>
    document.documentElement.style.setProperty(
      "--full-height",
      `${window.innerHeight}px`
    );

  useEffect(() => {
    setDocHeight();
    window.addEventListener("resize", setDocHeight);
    window.addEventListener("orientationchange", setDocHeight);

    return () => {
      window.removeEventListener("resize", setDocHeight);
      window.removeEventListener("orientationchange", setDocHeight);
    };
  }, []);
};
