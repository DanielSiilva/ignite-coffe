import { CartItems } from "./CartItems";
import { CompleteOrder } from "./CompleteOrder";

import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'



import { 
    Container, 
} from "./styled";

//Enum para validação dos metodos de pagamentos

// enum PaymentMethods{
//     CREDIT = 'credit',
//     DEBIT = 'debit',
//     MONEY = 'money'
// }


//Schema Para Validação com zod

// const andressFormValidationSchema = zod.object({
//     street: zod.string().min(1, 'Informe o nome da sua rua'),
//     number: zod.string().min(1, 'informe seu número'),
//     complement: zod.string().optional(),
//     cep: zod.string().min(1, 'informe o CEP'),
//     destrict: zod.string().min(1, 'informe o bairro'),
//     city: zod.string().min(1, 'Informe a cidade'),
//     uf: zod.string().min(1, 'Informe o estado'),
//     paymentMethod: zod.nativeEnum(
//         PaymentMethods, {
//             errorMap: () =>{
//                 return{ message: 'Informe o método de pagamento'}
//             }
//         },
//     ),
// })

// export type OrderData = zod.infer<typeof andressFormValidationSchema>


// const adressForm = useForm<OrderData>({
//     resolver: zodResolver(andressFormValidationSchema),
//     defaultValues:{
//         paymentMethod: undefined,
//     }
// })

//Criando a copida das propriedades do form

// const {handleSubmit, reset} = adressForm


export function CheckoutFilled (){

    return(
        <FormProvider >
            <Container>
                <CompleteOrder />
                <CartItems />
            </Container>
        </FormProvider>
    )
}