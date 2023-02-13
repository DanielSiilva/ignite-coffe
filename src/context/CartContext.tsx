import { createContext, ReactNode, useReducer } from "react";
import { addNewCoffeeCartAction } from "../reducers/actions";

import {CartReducer, CoffeeContext} from '../reducers/reducer'

interface CoffeeCartContextTypes {
  coffee: CoffeeContext[],
  addCoffeeCart: (data: CoffeeContext) => void
}


export const CoffeeCartContext = createContext({} as CoffeeCartContextTypes)

interface CoffeeContextProps{
  children: ReactNode
}


export function CoffeeCartProvider({children}: CoffeeContextProps){
  const [coffeeState, dispatch] = useReducer(
    CartReducer,
    {coffee: []},

    () =>{


      return{
        coffee: []
      }
    }
  )


  function addCoffeeCart(data: CoffeeContext) {
    dispatch(addNewCoffeeCartAction(data))
  }





   const {coffee} = coffeeState

  return(
    <CoffeeCartContext.Provider 
      value={{
        coffee,
        addCoffeeCart
      }}
    >

      {children}
    </CoffeeCartContext.Provider>
  )
}