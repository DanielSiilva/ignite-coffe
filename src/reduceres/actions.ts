import {CartItem} from '../contexts/ContexCart'

//Tipagem das ações para o reducer

export enum CartActions {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_ITEM_CART = 'REMOVE_ITEM_CART',
    CHANGE_CART_ITEM_QUANTITY = 'CHANGE_CART_ITEM_QUANTITY',
    CLEAN_CART = 'CLEAN_CART'
}

//Funções para disparar as ações quando dispatch for chamado

//Função add item ao cart

export function addCoffeeToCartAction(coffee:CartItem){
    return{
        type: CartActions.ADD_TO_CART,
        payload:{
            coffee
        },
    }
}

//função remover item do cart

export function removeItemAction (cartItemId: number){
    return{
        type: CartActions.REMOVE_ITEM_CART,
        payload:{
            cartItemId,
        }
    }
}

// Função para aumentar ou diminuir itens no carrinho

export function carteItemQuantityAction(cartItemId: number, change: 'increase' | 'decrease'){

    return{
        type: CartActions.CHANGE_CART_ITEM_QUANTITY,
        payload:{
            cartItemId,
            change
        }
    }
}

//Função para limpa o carrinho
export function cleanCartAction(){
    return{
        type: CartActions.CLEAN_CART
    }
}