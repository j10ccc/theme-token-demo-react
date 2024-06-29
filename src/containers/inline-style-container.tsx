import themeColor from "../theme/theme-color"
import useColorMode from "../theme/use-color-mode"

export default function InlineStyleContainer() {
  const { mode, setColorMode } = useColorMode()

  function handleToggleColorMode() {
    if (mode === "light") setColorMode("dark")
    else setColorMode("light")
  }

  return (
    <>
      <section style={{ height: "100px", backgroundColor: themeColor.Background }}>
        <h1 style={{ color: themeColor.Title }}>Title: InlineStyle</h1>
      </section>
      <button onClick={handleToggleColorMode}>Toggle Color Mode</button>
      <div>Current color mode: {mode}</div>
    </>
  )
}
