
import { useContext } from 'react'
import { CoffeeShopContext } from '../../../../context/CartContext'
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


    return (
        <ItemsContainer>
            <h2>Cafés selecionados</h2>

            <ContainerOrder>
                {coffee.map((coffee) => {
                    return (
                        <CartSelect
                            key={coffee.id} 
                            coffee ={ coffee}
                        />
                    )
                })}



                <FinalizeOrder>
                    <InformationRequest>
                        <span> Total de itens</span>
                        <span> R$ 29,70</span>
                    </InformationRequest>

                    <InformationRequest>
                        <span> Entrega</span>
                        <span> R$ 3,50</span>
                    </InformationRequest>

                    <InformationRequest>
                        <p> Total</p>
                        <p> R$ 33,20</p>
                    </InformationRequest>


                    <FinishButton type='submit'>
                        confirmar pedido
                    </FinishButton>
                </FinalizeOrder>

            </ContainerOrder>

            
        </ItemsContainer>
    )
}