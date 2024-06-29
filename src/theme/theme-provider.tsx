import { createContext, ReactNode, useState } from "react";
import { ThemeInstance } from "./theme-instance";

export const ThemeContext = createContext<Partial<{
  mode: ThemeInstance["mode"];
  setMode: (value: ThemeInstance["mode"]) => void;
}>>({})

export default function ThemeProvider(props: { children: ReactNode }) {
  const { children } = props;
  const [mode, setMode] = useState<ThemeInstance["mode"]>("light");

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
