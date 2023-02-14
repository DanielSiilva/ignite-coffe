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
  coffee: CoffeeContextCart[]
}

export interface actionType {
  ActionType: string
  payload: any
}

export function coffeeReducer(
  state: CoffeeState,
  action: actionType,
): CoffeeState {
  switch (action.ActionType) {
    case CoffeeActions.ADD_NEW_COFFEE_CART: {
      const existsInTheCart = state.coffee.findIndex(
        (coffee) => coffee.id === action.payload.id,
      )

      if (existsInTheCart < 0) {
        return {
          coffee: [...state.coffee, action.payload],

        }
      } else {
        const coffees = state.coffee.map((coffee) => {
          if (coffee.id === action.payload.id) {
            return {
              ...coffee,
              quantity: coffee.quantity + action.payload.quantity,
            }
          } else {
            return coffee
          }
        })
        return {
          coffee: [...coffees],
        }
      }
    }

    case CoffeeActions.REMOVE_NEW_COFFEE_CART: {
      const coffeeWithoutDelete = state.coffee.filter(
        (coffee) => coffee.id !== action.payload,
      )
      return {
        coffee: coffeeWithoutDelete,
      }
    }

    case CoffeeActions.REMOVE_ITEM_COFFEE_CART: {
      const coffees = state.coffee.map((coffee) => {
        if (coffee.id === action.payload.id) {
          return {
            ...coffee,
            quantity: coffee.quantity - 1,
          }
        } else {
          return coffee
        }
      })
      return {
        coffee: [...coffees],
      }
    }

    case CoffeeActions.ADD_ITEM_COFFEE_CART: {
      const coffees = state.coffee.map((coffee) => {
        if (coffee.id === action.payload.id) {
          return {
            ...coffee,
            quantity: coffee.quantity + 1,
          }
        } else {
          return coffee
        }
      })
      return {
        coffee: [...coffees],
      }
    }

    case CoffeeActions.CLEAR_ITEM_COFFEE_CART: {
      return {
        coffee: [],
      }
    }

    default:
      return {
        coffee: state.coffee,
      }
  }
}
