import { createContext, ReactNode } from "react";

interface CartContextType{

}


export const ContextCart = createContext({} as CartContextType)

interface CartContextProviderProps{
    children: ReactNode
}


export const CartContextProvider = ({children}: CartContextProviderProps) =>{
    return(
        <ContextCart.Provider
            value={{
                
            }}
        >

            {children}
        </ContextCart.Provider>
    )
}