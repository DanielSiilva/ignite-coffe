import { Minus, Plus } from "phosphor-react";

import {
    InputQuantityContainer
} from './styled'


export function InputQuantity(){


    return (
        <InputQuantityContainer>
            <button>
                <Minus size={14} weight="fill" />
            </button>
            
            <input type="text"  disabled/>

            <button>
                <Plus  size={14} weight="fill"/>
            </button>
        </InputQuantityContainer>
    )
}