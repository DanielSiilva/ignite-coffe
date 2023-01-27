import {useContext} from 'react'
import {ContextCart} from '../contexts/ContexCart'


export const useCart = () =>{
    return useContext(ContextCart)
}