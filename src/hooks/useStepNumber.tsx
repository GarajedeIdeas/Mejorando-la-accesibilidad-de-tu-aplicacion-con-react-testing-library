import { useLocation } from "react-router-dom";

export const useStepNumber = (): number => {
  const pathname = useLocation().pathname;

  switch (pathname) {
    case "/contrast":
      return 0;
    case "/alt":
      return 1;
    case "/empty-links":
      return 2;
    case "/labels":
      return 3;
    case "/empty-buttons":
      return 4;
    case "/lang":
      return 5;
    default:
      return 0;
  }
};
