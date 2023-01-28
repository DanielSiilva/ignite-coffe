import { createContext, ReactNode, useEffect, useReducer } from "react"
import { Coffee } from "../data/coffees"

export interface CartItem extends Coffee {
    quantify: number
}

import {cartReducer} from '../reduceres/reducer'

import {addItemToCartAction, changeCartItemQuantityAction, cleanCartAction, removeItemToCart} from '../reduceres/actions'

//Tipando o contexto
interface CartContextProps {
    cartItems: CartItem[]
    cartQuantity: number
    cartItemsTotal: number
    addCoffeeToCart: (coffee: CartItem) => void
    changeCartItemQuantity: (
        cartItemId: number,
        type: 'increase' | 'decrease'
     ) => void
    removeItem: (cartItemId: number) => void
    cleanCart: () => void
}


export const CartContext = createContext({} as CartContextProps )

interface CartContextProviderProps{
    children: ReactNode
}

const LOCAL_STORAGE_KEY = '@coffeeDelivery:cartItems'

export const CartContextProvider = ({children}: CartContextProviderProps) => {
    const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
        const storagedCartItems = localStorage.getItem(LOCAL_STORAGE_KEY)
    
        if (storagedCartItems) return JSON.parse(storagedCartItems)
    
        return []
      })
    
      const cartQuantity = cartItems.length
    
      const cartItemsTotal = cartItems.reduce((total, cartItems) => {
        return total + cartItems.price * cartItems.quantify
      }, 0)
    
      const addCoffeeToCart = (coffee: CartItem) => {
        dispatch(addItemToCartAction(coffee))
      }
    
      const changeCartItemQuantity = (
        cartItemId: number,
        type: 'increase' | 'decrease'
      ) => {
        dispatch(changeCartItemQuantityAction(cartItemId, type))
      }
    
      const removeItem = (cartItemId: number) =>
        dispatch(removeItemToCart(cartItemId))
    
      const cleanCart = () => dispatch(cleanCartAction())
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems))
      }, [cartItems])




    return(

        <CartContext.Provider 
            value={{
                cartItems,
                cartQuantity,
                cartItemsTotal,
                addCoffeeToCart,
                removeItem,
                changeCartItemQuantity,
                cleanCart,

            }}
        >
            {children}
        </CartContext.Provider>
    )
}