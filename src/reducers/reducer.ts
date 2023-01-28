
import {ActionsTypes} from './actions'



export interface ItemProps {
    id: string,
    image: string,
    price: number,
    amount:number
}


export function CartReducer(state: ItemProps[], actions: any){

    switch(actions.type){
        case ActionsTypes.ADD_ITEM_TO_CART:
            return [...state, actions.payload.newItem]

        case ActionsTypes.REMOVE_ITEM_FROM_CART:
            state = actions.payload.newItemCart
            return state

        case ActionsTypes.DECREASE_ITEM_AMOUNT:
            state = actions.payload.newItemCart
            return state
        
        case ActionsTypes.INCREASE_ITEM_AMOUNT:
            state = actions.payload.newItemCart
            return state

        case ActionsTypes.CLEAR_CART:
            state = actions.payload.cartClean
            return state

        default:
            return state
    }
}