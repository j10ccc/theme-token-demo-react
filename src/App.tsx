import InlineStyleContainer from './containers/inline-style-container'
import StyleSheetContainer from './containers/style-sheet-container'
import ThemeProvider from './theme/theme-provider'

function App() {

  return (
    <>
      <ThemeProvider>
        <InlineStyleContainer />
      </ThemeProvider>
      <hr />
      <ThemeProvider>
        <StyleSheetContainer />
      </ThemeProvider>
    </>
  )
}

export default App
