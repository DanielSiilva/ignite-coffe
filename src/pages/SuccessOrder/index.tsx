import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import Illustration from '../../assets/Illustration.svg'



import { 
    SuccessContainer,
    OrderDetails,
    TitleAndSubtitle,
    Banner,
    Details,
    BaseOrder,
    Icon1,
    InformationRequests,
    Icon2,
    Icon3
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
                            {/* Informççaões que vão vir do reducer */}

                            <p>
                                Entrega em 
                                <span>Rua João Daniel Martinelli, 102</span>
                            </p>

                            {/* Informççaões que vão vir do reducer */}
                            <p>Farrapos - Porto Alegre, RS</p>
                        </InformationRequests>
                    </BaseOrder>

                    <BaseOrder>
                        <Icon2>
                            <Timer
                                weight='fill'
                            />
                        </Icon2>

                        <InformationRequests>
                            <p>Previsão de entrega</p>
                            <span>20 min - 30 min </span> 
                        </InformationRequests>
                    </BaseOrder>

                    <BaseOrder>
                        <Icon3>
                            <CurrencyDollar 
                                weight='fill'
                            />
                        </Icon3>

                        <InformationRequests>
                            <p>Pagamento na entrega</p>

                            {/* Informççaões que vão vir do reducer */}
                            <span>Cartão de Crédito </span> 
                        </InformationRequests>
                    </BaseOrder>

                </Details>
            </OrderDetails>

            {/* Bannher */}
           
           <Banner src={Illustration} />
        </SuccessContainer>
    )
}