import {CurrencyDollarSimple, MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { PaymentMethods } from "../../../../components/PaymentMethod";


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
    const {register} = useFormContext()




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
                    <Cpf 
                        placeholder="CPF" 
                        {...register('cpf')}
                        required
                    />

                    <Street 
                        placeholder="Rua" 
                        {...register('Street')}
                        required
                    />


                    <NumberAndComplement>
                        <Number 
                            placeholder="Número" 
                            {...register('Number')}
                            required
                        />

                        <Complement 
                            placeholder="Complemento" 
                            {...register('Complement')}
                            required
                        />
                    </NumberAndComplement>
                    
                    <City>
                        <Neighborhood 
                            placeholder="Bairro"
                            {...register('Neighborhood')}
                            required
                         />

                        <ECity 
                            placeholder="Cidade" 
                            {...register('City')}
                            required
                        />

                        <Uf    
                            placeholder="UF"
                            {...register('Uf')}
                            required 
                        />      
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
                    <PaymentMethods />
                </PaymentButton>

            </PaymentMethod>

        </FormContainer>


    )
}