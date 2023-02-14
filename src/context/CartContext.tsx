import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { CoffeeContextCart, coffeeReducer } from '../reducers/reducer'

import {
  addItemCoffeeCartActions,
  addNewCoffeeCartAction,
  clearItemCoffeeCartActions,
  removeCoffeeCartAction,
  removeItemCoffeeCartAction,
} from '../reducers/actions'

interface CoffeeShopContextTypes {
  coffee: CoffeeContextCart[]
  addCoffeeShopCart: (data: CoffeeContextCart) => void
  addItemCoffeeShopCart: (data: CoffeeContextCart) => void
  removeCoffeeShopCart: (idCoffee: number) => void
  removeItemCoffeeShopCart: (data: CoffeeContextCart) => void
  clearItemCoffeeShopCart: () => void
}

export const CoffeeShopContext = createContext({} as CoffeeShopContextTypes)

interface CoffeeShopContextProps {
  children: ReactNode
}

export function CoffeeCartProvider({ children }: CoffeeShopContextProps) {
  const [coffeeState, dispatch] = useReducer(
    coffeeReducer,
    { coffee: [] },
    () => {
      const storedStateJSON = localStorage.getItem(
        '@coffee-delivery-state-1.0.0',
      )

      if (storedStateJSON) {
        return JSON.parse(storedStateJSON)
      }

      return {
        coffee: [],
      }
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeState)

    localStorage.setItem('@coffee-delivery-state-1.0.0', stateJSON)
  }, [coffeeState])

  function addCoffeeShopCart(data: CoffeeContextCart) {
    dispatch(addNewCoffeeCartAction(data))
  }

  function removeCoffeeShopCart(id: number) {
    dispatch(removeCoffeeCartAction(id))
  }

  function removeItemCoffeeShopCart(data: CoffeeContextCart) {
    dispatch(removeItemCoffeeCartAction(data))
  }

  function addItemCoffeeShopCart(data: CoffeeContextCart) {
    dispatch(addItemCoffeeCartActions(data))
  }

  function clearItemCoffeeShopCart() {
    dispatch(clearItemCoffeeCartActions())
  }

  const { coffee } = coffeeState

  return (
    <CoffeeShopContext.Provider
      value={{
        addCoffeeShopCart,
        coffee,
        removeCoffeeShopCart,
        removeItemCoffeeShopCart,
        addItemCoffeeShopCart,
        clearItemCoffeeShopCart,
      }}
    >
      {children}
    </CoffeeShopContext.Provider>
  )
}
