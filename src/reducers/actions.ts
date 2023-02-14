import { actionType, CoffeeContextCart } from './reducer'

export enum CoffeeActions {
  ADD_NEW_COFFEE_CART = 'ADD_NEW_COFFEE_CART',
  REMOVE_NEW_COFFEE_CART = 'REMOVE_NEW_COFFEE_CART',
  REMOVE_ITEM_COFFEE_CART = 'REMOVE_ITEM_COFFEE_CART',
  ADD_ITEM_COFFEE_CART = 'ADD_ITEM_COFFEE_CART',
  CLEAR_ITEM_COFFEE_CART = 'CLEAR_ITEM_COFFEE_CART',
}

export function addNewCoffeeCartAction(newCoffee: CoffeeContextCart): actionType {
  return {
    ActionType: CoffeeActions.ADD_NEW_COFFEE_CART,
    payload: newCoffee,
  }
}

export function removeCoffeeCartAction(id: number): actionType {
  return {
    ActionType: CoffeeActions.REMOVE_NEW_COFFEE_CART,
    payload: id,
  }
}

export function removeItemCoffeeCartAction(newCoffee: CoffeeContextCart): actionType {
  return {
    ActionType: CoffeeActions.REMOVE_ITEM_COFFEE_CART,
    payload: newCoffee,
  }
}

export function addItemCoffeeCartActions(newCoffee: CoffeeContextCart): actionType {
  return {
    ActionType: CoffeeActions.ADD_ITEM_COFFEE_CART,
    payload: newCoffee,
  }
}

export function clearItemCoffeeCartActions(): actionType {
  return {
    ActionType: CoffeeActions.CLEAR_ITEM_COFFEE_CART,
    payload: [],
  }
}
