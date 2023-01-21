import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { PaymentMethods } from './components/PaymentMethods';



import { 
    ContainerOrder,
    PaymentAndOrder,
    ContainerForm,
    Statement,
    PaymentMethod

} from "./styled";



export function CompleteOrder(){

    return(
        <ContainerOrder>
            <h3> Complete seu pedido</h3>

            <PaymentAndOrder>
                <ContainerForm>
                    <Statement>
                        <MapPinLine size={22} weight='regular'/>
                        <div>
                            <p>Endereço de Entrega</p>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>

                    </Statement>

                    <section>
                        <input type="text" placeholder="CEP" id="cep"/>

                        <input type="text" placeholder="Rua" id="street"/>

                        <input type="text" placeholder="Número" id="number"/>

                        <input 
                            id="complement"
                            placeholder="Complemento (Opcional)"
                        />

                        <input type="text" placeholder="Bairro" />

                        <input type="text" placeholder="Cidade" />

                        <input type="text" placeholder="UF" />
                    </section>
                    
                   
                </ContainerForm>

                <PaymentMethod>
                    <Statement>
                        <CurrencyDollar size={22} weight='regular' color='#8047F8'/>
                        <div>
                            <p>Pagamento</p>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </Statement>
                    
                    <PaymentMethods />
                </PaymentMethod>
            </PaymentAndOrder>
        </ContainerOrder>
    )
}