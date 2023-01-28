import { createContext, ReactNode, useEffect, useReducer } from "react"
import { Coffee } from "../data/coffees"





export interface CartItem extends Coffee {
    quantify: number
}


//Tipando o contexto
interface CartContextProps {
   
}


export const CartContext = createContext({} as CartContextProps )

interface CartContextProviderProps{
    children: ReactNode
}



export const CartContextProvider = ({children}: CartContextProviderProps) => {
    

    return(

        <CartContext.Provider 
            value={{

            }}
        >
            {children}
        </CartContext.Provider>
    )
}