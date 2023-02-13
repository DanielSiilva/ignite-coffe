import {CoffeeActions} from './actions'

export interface CoffeeContext{
    id: number,
    tags:string[],
    name: string,
    info: string,
    image: string,
    price: number,
    quantity: number
    
}


interface CartState{
    coffee: CoffeeContext[],
}

export interface ActionType {
    actionType: string,
    payload: any,
}


export function CartReducer(state: CartState, action: ActionType) {
  switch (action.actionType) {
    case CoffeeActions.ADD_NEW_COFFEE:{

        const coffeeExitsTheCart = state.coffee.findIndex((coffee) => coffee.id === action.payload.id)

        if(coffeeExitsTheCart < 0){
            return {
                coffee: [...state.coffee, action.payload]
            }
        }

    }
    

    
    
    
    default:
      return state
  }

    
          
            
    

          
    
    
  
}