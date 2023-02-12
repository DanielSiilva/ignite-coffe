
import { FormCompleteOrder } from './components/FormCompleteOrder'
import { SelectedItems } from './components/SelectedItems'

import * as zod from 'zod'

import {FormProvider, useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  FormContainer,
} from './styled'


const newOrderValidationSchema = zod.object({
  cpf: zod.string().min(1, "Informe o seu CPF"),
  Street: zod.string().min(1, "Informe seu enderenço"),
  Number: zod.string().min(1, "Informe o número da su casa"),
  Complement: zod.string().min(1, "Informe o complemento"),
  Neighborhood: zod.string().min(1, "Informe seu bairro"),
  City: zod.string().min(1, "Informe sua cidade"),
  Uf: zod.string().min(1, "informe seu estado"),
})

type NewOrderData = zod.infer<typeof newOrderValidationSchema>


export function Checkout (){


    const newOrderForm = useForm<NewOrderData>({
      resolver: zodResolver(newOrderValidationSchema),
      defaultValues:{
        cpf: '',
        City: '',
        Complement: '',
        Neighborhood: '',
        Number: '',
        Street: '',
        Uf: '',
      },
    })

    const {register, reset, handleSubmit} = newOrderForm

    return (
        <FormContainer /*onSubmit={handleSubmit()} */>
          <FormProvider {...newOrderForm}>
            <FormCompleteOrder />
            <SelectedItems />
          </FormProvider>
        </FormContainer>
      )
}


