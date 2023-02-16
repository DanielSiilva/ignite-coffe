import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Illustration from '../../assets/Illustration.svg'

import {NewOrderData} from '../CheckoutFilled/index'



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

interface LocationType {
    state: NewOrderData
}



export function SuccessOrder (){
    const {state} = useLocation() as unknown as LocationType
    const navigate = useNavigate()


    useEffect(()=>{
        if(!state){
            navigate('/')
        }
    }, [state, navigate])

    if(!state){
        return <></>
    }

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
                                <span>{state.Street}, {state.Number}</span>
                            </p>

                            <p>{state.City}</p>
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

                            <span>FALTA ISSO</span> 
                        </InformationRequests>
                    </BaseOrder>

                </Details>
            </OrderDetails>

           <Banner src={Illustration} />
        </SuccessContainer>
    )
}