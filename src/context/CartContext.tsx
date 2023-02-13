  import {
    createContext,
    ReactNode,
  } from 'react'
 

  export interface Order {
    
  }




  interface CreateOrderData {
    task: string
    minutesAmount: number
  }
    


  interface OrderContextType {
    createNewOrder: (data: CreateOrderData) => void
  }


  
  export const OrderContext = createContext({} as OrderContextType)
  


  interface OrderContextProviderProps {
    children: ReactNode
  }
  





  export function OrderContextProvider({ children }: OrderContextProviderProps) {
    //Precisar de um estado de pedido, que guarde as informações: enderenço e metodo de pagamento

    function createNewOrder(data: CreateOrderData) {

      

      
    }
    





  
    return (
      <OrderContext.Provider
        value={{
          createNewOrder

          
        }}
      >
        {children}
      </OrderContext.Provider>
    )
  }
  