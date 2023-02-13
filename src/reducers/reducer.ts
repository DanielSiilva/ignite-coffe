import { CoffeeActions } from './actions'

export interface CoffeeContextCart {
    id: number,
    tags:string[],
    name: string,
    info: string,
    image: string,
    price: number,
    quantity: number
}

interface CoffeeState {
  coffees: CoffeeContextCart[]
}

export interface actionType {
  ActionType: string
  payload: any
}

export function CartReducer(
  state: CoffeeState,
  action: actionType,
): CoffeeState {
  switch (action.ActionType) {
    case CoffeeActions.ADD_NEW_COFFEE_CART: {
      const coffeeExitsTheCart = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.id,
      )

      if (coffeeExitsTheCart < 0) {
        return {
          coffees: [...state.coffees, action.payload],

        }
      } 
    }

    

    default:
      return {
        coffees: state.coffees,
      }
  }
}
