import themeColor from "../theme/theme-color"
import useColorMode from "../theme/use-color-mode"

const createStyleSheet = () => ({
  container: {
    height: "100px",
    backgroundColor: themeColor.Background
  }
})

export default function StyleSheetContainer() {
  const { mode, setColorMode } = useColorMode()
  const styleSheet = createStyleSheet();

  function handleToggleColorMode() {
    if (mode === "light") setColorMode("dark")
    else setColorMode("light")
  }

  return (
    <>
      <section style={styleSheet.container}>
        <h1 style={{ color: themeColor.Title }}>Title: StyleSheet</h1>
      </section>
      <button onClick={handleToggleColorMode}>Toggle Color Mode</button>
      <div>Current color mode: {mode}</div>
    </>
  )
}
