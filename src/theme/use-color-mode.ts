import { useContext } from "react";
import { ThemeContext } from "./theme-provider";
import themeInstance, { ThemeInstance } from "./theme-instance";

export default function useColorMode() {
  const themeContext = useContext(ThemeContext);

  function setColorMode(mode: ThemeInstance["mode"]) {
    themeInstance.mode = mode
    themeContext.setMode?.(mode)
  }

  return {
    mode: themeContext.mode,
    setColorMode
  }
}
