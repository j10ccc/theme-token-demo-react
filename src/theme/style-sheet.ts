import { useMemo } from "react";
import useColorMode from "./use-color-mode"

function useThemeStyle<T>(style: T) {
  const { mode } = useColorMode();

  if (!mode) {
    console.warn("Please use theme in ThemeProvider.")
  }

  const reactiveStyle = useMemo(() => style, [mode, style])

  return reactiveStyle
}

const StyleSheet = {
  create: useThemeStyle
}

export default StyleSheet