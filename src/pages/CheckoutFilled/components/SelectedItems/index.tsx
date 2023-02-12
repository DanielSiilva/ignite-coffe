import {
    ItemsContainer,
    FinalizeOrder,
    ContainerOrder,
    InformationRequest,
    FinishButton


} from './styled'


export function SelectedItems (){



    return (
        <ItemsContainer>
            <h2>Cafés selecionados</h2>

            <ContainerOrder>




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