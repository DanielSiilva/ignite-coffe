import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider } from 'styled-components'
import { Router } from './Router/Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import {CoffeeShopProvider} from './context/CartContext'

export function App (){


  return(
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeShopProvider
>
          <Router />
        </CoffeeShopProvider>
        <GlobalStyle/>
      </BrowserRouter>
    </ThemeProvider>
    
  )
}