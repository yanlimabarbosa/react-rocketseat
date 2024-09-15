import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.js'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global.js'
import { Router } from './Router.js'
import { CylesContextProvider } from './contexts/CyclesContext.js'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CylesContextProvider>
          <Router />
        </CylesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
