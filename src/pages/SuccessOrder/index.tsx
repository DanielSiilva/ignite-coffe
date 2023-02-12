
import { 
    SuccessContainer,
    OrderDetails,
    TitleAndSubtitle
} from "./styled";



export function SuccessOrder (){

    return(
        <SuccessContainer>
            <OrderDetails>
                <TitleAndSubtitle>
                    <h2>Uhu! Pedido confirmado</h2>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </TitleAndSubtitle>

                <div>

                </div>
            </OrderDetails>

            {/* Bannher */}
            <div>


            </div>
        </SuccessContainer>
    )
}