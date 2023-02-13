import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider } from 'styled-components'
import { Router } from './Router/Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import {CoffeeCartProvider} from './context/CartContext'

export function App (){


  return(
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeCartProvider>
          <Router />
        </CoffeeCartProvider>
        <GlobalStyle/>
      </BrowserRouter>
    </ThemeProvider>
    
  )
}