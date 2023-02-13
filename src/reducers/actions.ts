import {Order} from './reducer'

export enum ActionTypes {
  ADD_NEW_ORDER = 'ADD_NEW_ORDER',
  
}



export function addNewCycleAction(newOrder: Order) {
  return {
    type: ActionTypes.ADD_NEW_ORDER,
    payload: {
      newOrder,
    },
  }
}



