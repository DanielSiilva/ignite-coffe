import { Bank, CreditCard, CurrencyDollarSimple, MapPinLine, Money } from "phosphor-react";

import { 
    BaseInformation,
    FormContainer,
    Information,
    AddressContainer,
    Cpf,
    Street,
    NumberAndComplement,
    Number,
    Complement,
    City,
    ECity,
    Neighborhood,
    Uf,
    PaymentMethod,
    PaymentButton
} from "./styled";




export function FormCompleteOrder(){

    return (
        <FormContainer>
            <h2>Complete seu pedido</h2>

            <Information>
                <BaseInformation>
                    <MapPinLine 
                        size={22}
                        weight='light'
                        color={"#C47F17"}
                    />

                    <div>
                        <p> Endereço de Entrega</p>
                        <span> 
                            Informe o endereço onde deseja receber seu pedido
                        </span>
                    </div>
                </BaseInformation>

                <AddressContainer>
                    <Cpf placeholder="CPF" />

                    <Street placeholder="Rua" />


                    <NumberAndComplement>
                        <Number placeholder="Número" />

                        <Complement placeholder="Complemento" />
                    </NumberAndComplement>
                    
                    <City>
                        <Neighborhood placeholder="Bairro" />

                        <ECity placeholder="Cidade" />

                        <Uf placeholder="UF" />      
                    </City>
                    
                </AddressContainer>


            </Information>

            <PaymentMethod>
                <BaseInformation>
                    <CurrencyDollarSimple 
                        size={22}  
                        weight='fill'
                        color ={"#8047F8"}
                    />

                    <div>
                        <p> Pagamento</p>
                        <span> 
                            O pagamento é feito na entrega. Escolha a forma que deseja pagar
                        </span>
                    </div>
                </BaseInformation>

                <PaymentButton>

                    <button
                        value={'cartão de crédito'}
                    >
                        <CreditCard  
                            weight="bold"
                            size={16}
                        />
                        Cartão de crédito
                    </button>

                    <button
                        value={'cartão de débito'}
                    >
                        <Bank  
                            size={16}
                        />
                        cartão de débito
                    </button>


                    <button
                        value={'dinheiro'}
                    >
                        <Money 
                            size={16}
                        />
                        dinheiro
                    </button>

                </PaymentButton>

            </PaymentMethod>

        </FormContainer>


    )
}