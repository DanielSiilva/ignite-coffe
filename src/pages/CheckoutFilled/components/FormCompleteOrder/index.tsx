import { MapPinLine } from "phosphor-react";

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
    Uf
} from "./styled";




export function FormCompleteOrder(){

    return (
        <FormContainer>
            <h2>Complete seu pedido</h2>

            <Information>
                <BaseInformation>
                    <MapPinLine size={22} weight='light' />

                    <div>
                        <p> Endereço de Entrega</p>
                        <span> Informe o endereço onde deseja receber seu pedido</span>
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



            <div>

            </div>

        </FormContainer>


    )
}