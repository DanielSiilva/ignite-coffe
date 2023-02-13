import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { CartReducer, CoffeeContextCart } from '../reducers/reducer'


import {
 addNewCoffeeCartAction
} from '../reducers/actions'

interface CoffeeShopContextTypes {
  coffees: CoffeeContextCart[],
  addNewCoffeeCart: (data: CoffeeContextCart) => void,
  
}

export const CoffeeShopContext = createContext({} as CoffeeShopContextTypes)

interface CoffeeShopContextProps {
  children: ReactNode
}

export function CoffeeShopProvider({ children }: CoffeeShopContextProps) {
  const [cartState, dispatch] = useReducer(
    CartReducer,
    { coffees: [] },
    () => {
      const storedStateJSON = localStorage.getItem(
        '@coffee-delivery-state-1.0.0',
      )

      if (storedStateJSON) {
        return JSON.parse(storedStateJSON)
      }

      return {
        coffees: [],
      }
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery-state-1.0.0', stateJSON)
  }, [cartState])

  
  function addNewCoffeeCart(data: CoffeeContextCart){
    dispatch(addNewCoffeeCartAction(data))
  }



  const { coffees } = cartState

  return (
    <CoffeeShopContext.Provider
      value={{
        coffees,
        addNewCoffeeCart
      }}
    >
      {children}
    </CoffeeShopContext.Provider>
  )
}
