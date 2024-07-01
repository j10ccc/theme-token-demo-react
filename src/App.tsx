import InlineStyleContainer from './containers/inline-style-container'
import StyleSheetContainer from './containers/style-sheet-container'
import WithMemoContainer from './containers/with-memo-container'
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
      <hr />
      <ThemeProvider>
        <WithMemoContainer />
      </ThemeProvider>
    </>
  )
}

export default App
