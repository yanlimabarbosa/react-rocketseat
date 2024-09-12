import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.js'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global.js'
import { Router } from './Router.js'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
