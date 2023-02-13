

import { produce } from 'immer'

import {ActionTypes} from './actions'

export interface Order {
    cpf: string,
    City: string,
    Complement: string,
    Neighborhood: string,
    Number: string,
    Street: string,
    Uf: string
}

export interface OrderState{
    orders: Order[],
}


export function orderReducer(state: OrderState, action: any) {
  switch (action.type) {
    
    case ActionTypes.ADD_NEW_ORDER:
        return produce(state, (draft)=>{
            draft.orders.push(action.payload.newOrder)
        })

    
    
    
    default:
      return state
  }

    
          
            
    

          
    
    
  
}