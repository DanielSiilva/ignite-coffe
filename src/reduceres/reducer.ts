import produce from "immer";
import { CartItem } from "../context/ContexCart";
import { ActionsCart } from "./actions";



export const cartReducer = (carItems: CartItem[], action: any):CartItem[] =>{
    const {type, payload} = action

    switch(type){
        case ActionsCart.ADD_ITEM_TO_CART:{
            const coffee = payload.coffee

            const coffeeAlreadyInCart = carItems.findIndex(
                (product) => product.id === coffee.id
            )

            return produce(carItems, (draft) =>{
                if(coffeeAlreadyInCart < 0){
                      draft.push(coffee)  
                }else{
                    draft[coffeeAlreadyInCart].quantify += coffee.quantify
                }
            })
        }

        case ActionsCart.REMOVE_ITEM_TO_CART:{
            const {payload} = action

            const {cartItemId} = payload

            return produce(carItems, (draft) =>{
                const coffeeAlreadyInCart = carItems.findIndex(
                    (product) => product.id === cartItemId
                )

                if(coffeeAlreadyInCart >= 0){
                    draft.splice(coffeeAlreadyInCart, 1)
                }
            })
        }

        case ActionsCart.CHANGE_CART_ITEM_QUANTITY:{
            const {payload} = action

            const {cartItemId, change} = payload

            return produce(carItems, (draft) =>{
                const coffeeExistInCart = carItems.findIndex(
                    (product) => product.id === cartItemId
                )

                if (coffeeExistInCart >= 0) {
                    const item = draft[coffeeExistInCart]

                    switch (change){
                        case 'increase':{
                            draft[coffeeExistInCart].quantify = item.quantify + 1
                            break
                        }

                        case 'decrease':{
                            draft[coffeeExistInCart].quantify >= 1 &&
                            (draft[coffeeExistInCart].quantify = item.quantify -1)
                        }
                    }
                }
            })
        }

        case ActionsCart.CLEAN_CART:{
            return produce( carItems, (draft) => draft = [])
        }

        default:
            throw new Error('erro ao adcionar item')
    }
}