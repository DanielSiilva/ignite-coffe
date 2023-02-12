import {
    createContext,
    ReactNode,
} from 'react'
 
  
 
  
  interface OrderContextType {
    
  }


  
  export const OrderContext = createContext({} as OrderContextType)
  


  interface OrderContextProviderProps {
    children: ReactNode
  }
  





  export function OrderContextProvider({ children }: OrderContextProviderProps) {
    //Precisar de um estado de pedido, que guarde as informações: enderenço e metodo de pagamento

    


  
    return (
      <OrderContext.Provider
        value={{
          

          
        }}
      >
        {children}
      </OrderContext.Provider>
    )
  }
  