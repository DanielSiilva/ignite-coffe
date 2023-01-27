import { createContext, ReactNode } from "react"
import { Coffee } from "../data/coffees"

export interface CartItem extends Coffee {
    quantify: number
}


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