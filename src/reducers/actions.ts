import {ActionType, CoffeeContext} from './reducer'

export enum CoffeeActions{
  ADD_NEW_COFFEE =  'ADD_NEW_COFFEE',
  REMOVE_NEW_COFFEE = 'REMOVE_NEW_COFFEE',
  REMOVE_ITEM_CART = 'REMOVE_ITEM_CART',
  ADD_ITEM_CART =  'ADD_ITEM_CART',
  CLEAR_ITEM_CART = 'CLEAR_ITEM_CART'
}

export function addNewCoffeeCartAction(newCoffee: CoffeeContext): ActionType{
  return {
    actionType: CoffeeActions.ADD_NEW_COFFEE,
    payload: newCoffee
  }
}





