import { MapPin } from 'phosphor-react';
import Illustration from '../../assets/Illustration.svg'



import { 
    SuccessContainer,
    OrderDetails,
    TitleAndSubtitle,
    Banner,
    Details,
    BaseOrder,
    Icon1,
    InformationRequests
} from "./styled";



export function SuccessOrder (){

    return(
        <SuccessContainer>
            <OrderDetails>
                <TitleAndSubtitle>
                    <h2>Uhu! Pedido confirmado</h2>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </TitleAndSubtitle>

                <Details>
                    <BaseOrder>
                        <Icon1>
                            <MapPin 
                                weight='fill'
                            />
                        </Icon1>

                        <InformationRequests>

                            <p>
                                Entrega em 
                                <span>Rua João Daniel Martinelli, 102</span>
                            </p>

                            <p>Farrapos - Porto Alegre, RS</p>
                        </InformationRequests>
                    </BaseOrder>

                </Details>
            </OrderDetails>

            {/* Bannher */}
           
           <Banner src={Illustration} />
        </SuccessContainer>
    )
}