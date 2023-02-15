import { Trash } from 'phosphor-react'
import { InputQuantity } from '../../../../../components/InputQuantity'
import {CoffeeContextCart} from '../../../../../reducers/reducer'

import {priceFormatter} from '../../../../../utils/formatter'

import {
    CartDetails,
    CartPurchase,
    ContainerCart,
    ButtonRemove,
    Prince
}from './styled'





interface Coffee {
    coffee: CoffeeContextCart
}


export function CartSelect ({coffee}: Coffee){

   


    return (
        <ContainerCart>
            <CartDetails>
                <img src={coffee.image} />

                <CartPurchase>
                    <p>{coffee.name}</p>
                    
                    <div>
                        <InputQuantity />

                        <ButtonRemove>
                            <Trash  size={16}/>
                            remover
                        </ButtonRemove>
                    </div>
                </CartPurchase>
            </CartDetails>
            
            <Prince>R$ {priceFormatter(coffee.price)}</Prince>

        </ContainerCart>
    )
}