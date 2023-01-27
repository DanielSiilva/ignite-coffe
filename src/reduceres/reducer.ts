import { Action } from "@remix-run/router";
import produce from "immer";
import { CartItem } from "../contexts/ContexCart";

import {CartActions} from './actions'

export const cartReducer = (cartItems: CartItem[], action: any): CartItem[] => {
    const{ type, payload} = action

    switch(type){
        case CartActions.ADD_TO_CART:{
            const coffee = payload.coffee
            const coffeeAlreadyInCart = cartItems.findIndex(
                (product) => product.id === coffee.id
            )

            return produce(cartItems, (draft) => {
                if(coffeeAlreadyInCart < 0){
                    draft.push(coffee)
                }else{
                    draft[coffeeAlreadyInCart].quantity += coffee.quantity
                }
            })
        };

        case CartActions.REMOVE_ITEM_CART:{
            const {payload} = action

            const {cartItemId} = payload

            return produce(cartItems, (draft) =>{
                const coffeeAlreadyInCart = cartItems.findIndex(
                    (product) => product.id === cartItemId
                )

                if ( coffeeAlreadyInCart >= 0){
                    draft.splice(coffeeAlreadyInCart, 1)
                }
            })
        };

        case CartActions.CHANGE_CART_ITEM_QUANTITY:{
            const {payload} = action

            const {cartItemId, change} = payload

            return produce(cartItems, (draft) =>{
                const coffeeAlreadyInCart = cartItems.findIndex(
                    (product) => product.id === cartItemId
                )

                if ( coffeeAlreadyInCart >= 0){
                    const item = draft[coffeeAlreadyInCart]

                    switch(change){
                        case 'increase':{
                            draft[coffeeAlreadyInCart].quantity = item.quantity + 1
                            break
                        }
                        case 'decrease':{
                            draft[coffeeAlreadyInCart].quantity >= 1 &&
                            (draft[coffeeAlreadyInCart].quantity = item.quantity -1)
                            break
                        }
                    }
                }
            })
        };
        case CartActions.CLEAN_CART:{
            return produce(cartItems, (draft) => (draft = []))
        }

        default:
            throw new Error('erro');
            
    }

}