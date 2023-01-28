import {ItemProps} from './reducer'

//Tipagem das ações para o reducer
export enum ActionsTypes {
    ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
    REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
    INCREASE_ITEM_AMOUNT = 'INCREASE_ITEM_AMOUNT',
    DECREASE_ITEM_AMOUNT = 'DECREASE_ITEM_AMOUNT',
    CLEAR_CART = 'CLEAR_CART',

}

export function addIItemToCartAction(newItem: ItemProps){
    return {
        type: ActionsTypes.ADD_ITEM_TO_CART,
        payload:{
            newItem
        }
    }

}


export function removeItemCartAction (newItemsCart: ItemProps[]){
    return{
        type: ActionsTypes.REMOVE_ITEM_FROM_CART,
        payload:{
            newItemsCart
        }
    }

}

export function increaseItemAmountAction(newItemsCart: ItemProps[]){
    return{
        type: ActionsTypes.INCREASE_ITEM_AMOUNT,
        payload:{
            newItemsCart
        }
    }
}

export function decreaseItemAmountAction(newItemCart: ItemProps[]){
    return{
        type: ActionsTypes.DECREASE_ITEM_AMOUNT,
        payload:{
            newItemCart
        }
    }
}


export function clearCartAction(){
    const cartClean: ItemProps[] = []

    return {
        type: ActionsTypes.CLEAR_CART,
        payload: {
            cartClean
        }
    }
}