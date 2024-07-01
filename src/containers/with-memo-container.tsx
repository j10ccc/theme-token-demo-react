import { memo } from "react"
import themeColor from "../theme/theme-color"
import useColorMode from "../theme/use-color-mode"
import StyleSheet from "../theme/style-sheet"

const createStyleSheet = () => StyleSheet.create({
  container: {
    height: "100px",
    backgroundColor: themeColor.Background
  }
})

const MemorizedComponent = memo(() => {
  const styleSheet = createStyleSheet();

  return (
    <section style={styleSheet.container}>
      <h1 style={{ color: themeColor.Title }}>Title: With React Memo</h1>
    </section>
  )
})

export default function WithMemoContainer() {
  const { mode, setColorMode } = useColorMode()

  function handleToggleColorMode() {
    if (mode === "light") setColorMode("dark")
    else setColorMode("light")
  }

  return (
    <>
      <MemorizedComponent />
      <button onClick={handleToggleColorMode}>Toggle Color Mode</button>
      <div>Current color mode: {mode}</div>
    </>
  )
}
