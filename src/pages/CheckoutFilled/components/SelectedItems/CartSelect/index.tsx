import { Trash } from 'phosphor-react'
import { InputQuantity } from '../../../../../components/InputQuantity'
import {CoffeeContextCart} from '../../../../../reducers/reducer'

import {priceFormatter} from '../../../../../utils/formatter'

import {
    CartDetails,
    CartPurchase,
    ContainerCart,
    ButtonRemove
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
                            <Trash />
                            remover
                        </ButtonRemove>
                    </div>
                </CartPurchase>
            </CartDetails>
            
            <p>R$ {priceFormatter(coffee.price)}</p>

        </ContainerCart>
    )
}