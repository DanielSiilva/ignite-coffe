import { createContext, ReactNode } from "react"
import { Coffee } from "../data/coffees"

export interface CartItem extends Coffee {
    quantify: number
}

//Tipando o contexto
interface CartContextProps {
    cartItems: CartItem[],
    carQuantity: number,
    carItemsTotal: number,
    addCoffeeToCart: (coffee: CartItem) => void,
    changeCartItemQuantity:(cartItemId: number, type: 'increase' | 'decrease') => void,
    removeItem: (cartItemId:number) => void,
    cleanCart: () => void
}


export const CartContext = createContext({} as CartContextProps )

interface CartContextProviderProps{
    children: ReactNode
}

const LOCAL_STORAGE_KEY = '@coffeeDelivery:cartItems'

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