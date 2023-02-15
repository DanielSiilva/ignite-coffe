
import { useContext } from 'react'
import { CoffeeShopContext } from '../../../../context/CartContext'
import { priceFormatter } from '../../../../utils/formatter'
import { CartSelect } from './CartSelect'

import {
    ItemsContainer,
    FinalizeOrder,
    ContainerOrder,
    InformationRequest,
    FinishButton,
} from './styled'


export function SelectedItems (){
    const {coffee}  = useContext(CoffeeShopContext)


    const deliveryPrice:number = 3.50

    const totalItem = coffee.reduce(
        (accumulator, currentValue) => currentValue.quantity + accumulator,
        0,
    )
    const totalPrice = coffee.reduce(
        (accumulator, currentValue) => currentValue.price + accumulator,
        0,
    ) * totalItem

    




    return (
        <ItemsContainer>
            <h2>Cafés selecionados</h2>

            <ContainerOrder>
                {coffee.map((coffee) => {
                    return (
                        <CartSelect
                            key={coffee.id} 
                            coffeeItem ={ coffee}
                        />
                    )
                })}

                <FinalizeOrder>
                    <InformationRequest>
                        <span> Total de itens</span>
                        <span> R$ {priceFormatter(totalPrice)}</span>
                    </InformationRequest>

                    <InformationRequest>
                        <span> Entrega</span>
                        <span> R$ 3,50</span>
                    </InformationRequest>

                    <InformationRequest>
                        <p> Total</p>
                        <p> R$ {priceFormatter(totalPrice + deliveryPrice)}</p>
                    </InformationRequest>


                    <FinishButton type='submit'>
                        confirmar pedido
                    </FinishButton>
                </FinalizeOrder>

            </ContainerOrder>

            
        </ItemsContainer>
    )
}