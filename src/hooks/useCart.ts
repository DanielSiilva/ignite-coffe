import {useContext} from 'react'
import { CartContext } from '../context/ContexCart'



export const useCart = () =>{
    return useContext(CartContext)
}