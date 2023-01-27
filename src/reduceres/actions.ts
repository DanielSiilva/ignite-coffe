import {CartItem} from '../context/ContexCart'

export enum ActionsCart {
    ADD_ITEM_TO_CART  = 'ADD_ITEM_TO_CART',
    REMOVE_ITEM_TO_CART = 'REMOVE_ITEM_TO_CART',
    CHANGE_CART_ITEM_QUANTITY = ' CHANGE_CART_ITEM_QUANTITY',
    CLEAN_CART = 'CLEAN_CART'
}

export function addItemToCartAction(coffee: CartItem){
    return{
        type: ActionsCart.ADD_ITEM_TO_CART,
        payload:{
            coffee
        }
    }
}


export function removeItemToCart (cartItemId:number){
    return{
        type: ActionsCart.REMOVE_ITEM_TO_CART,
        payload:{
            cartItemId
        }
    }
}

export function changeCartItemQuantityAction(cartItemId:number, change: 'increase' | 'decrease'){

    return{
        type: ActionsCart.CHANGE_CART_ITEM_QUANTITY,
        payload:{
            cartItemId,
            change
        }
    }
}

export function cleanCartAction(){
    return{
        type: ActionsCart.CLEAN_CART
    }
}