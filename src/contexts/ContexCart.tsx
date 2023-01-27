import { createContext, ReactNode, useEffect, useReducer } from "react";


import {Coffee} from '../data/coffees'
import { addCoffeeToCartAction, carteItemQuantityAction, cleanCartAction, removeItemAction } from "../reduceres/actions";
import { cartReducer } from "../reduceres/reducer";


export interface CartItem extends Coffee {
    quantity: number
}

//Tipagem do contexto
interface CartContextType {
    cartItems: CartItem[],
    cartQuantity: number,
    cartItemsTotal: number,
    addCoffeeToCart: (coffe: CartItem) => void,
    changeCartItemQuantity: (
        cartItemId: number, type: 'increase' | 'decrease'
    ) => void ,
    removeItem: ( cartItemId: number) => void,
    cleanCart: () => void
}


export const ContextCart = createContext({} as CartContextType)

interface CartContextProviderProps{
    children: ReactNode
}

const LOCAL_STORAGE_KEY = '@coffee-delivery:cartItems' 

export const CartContextProvider = ({children}: CartContextProviderProps) =>{

    const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
        const storagedCartItems = localStorage.getItem(LOCAL_STORAGE_KEY)
    
        if (storagedCartItems) {
            return JSON.parse(storagedCartItems)
        } 
        return []
      })

      //Verificando se existe itens no cart
      const cartQuantity = cartItems.length

      //Soma dos intens existentes
      const cartItemsTotal = cartItems.reduce((total, cartItems) =>{
        return total + cartItems.price * cartItems.quantity
      }, 0)

      // Add item ao  cart
      function addCoffeeToCart (coffee: CartItem){
            dispatch(addCoffeeToCartAction(coffee))
      }

      //Verifica quantidade de itens

      function changeCartItemQuantity(cartItemId:number, type: 'increase' | 'decrease'){
        dispatch(carteItemQuantityAction(cartItemId, type))
      }

      //Remove item do cart

      function removeItem (cartItemId:number){
        dispatch(removeItemAction(cartItemId))
      }

      //Limpa cart

      function cleanCart(){
        dispatch(cleanCartAction())
      }


      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems))
      }, [cartItems])

    return(
        <ContextCart.Provider
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
        </ContextCart.Provider>
    )
}