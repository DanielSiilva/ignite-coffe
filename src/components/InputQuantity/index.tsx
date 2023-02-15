import { Minus, Plus } from "phosphor-react";

import {
    InputQuantityContainer
} from './styled'


interface InputQuantityProps{
    quantity: number,
    addQuantity: () => void,
    removeQuantity: () => void,
}



export function InputQuantity({quantity, addQuantity, removeQuantity}: InputQuantityProps){


    return (
        <InputQuantityContainer>
            <button onClick={removeQuantity} type='button'>
                <Minus size={14} weight="fill" />
            </button>
            
            <input 
                type="text"  
                disabled
                value={quantity}
            />

            <button onClick={addQuantity} type='button'>
                <Plus  size={14} weight="fill"/>
            </button>
        </InputQuantityContainer>
    )
}