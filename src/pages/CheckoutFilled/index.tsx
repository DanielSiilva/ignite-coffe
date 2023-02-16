
import { FormCompleteOrder } from './components/FormCompleteOrder'
import { SelectedItems } from './components/SelectedItems'

import * as zod from 'zod'

import {FormProvider, useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  FormContainer,
} from './styled'
import { useContext } from 'react'
import { CoffeeShopContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

enum Methods {
  CREDIT = 'credit',
  DEBIT = 'debit',
  MONEY = 'money',
}


const newOrderValidationSchema = zod.object({
  cpf: zod.string().min(1, "Informe o seu CPF"),
  Street: zod.string().min(1, "Informe seu enderenço"),
  Number: zod.string().min(1, "Informe o número da su casa"),
  Complement: zod.string().min(1, "Informe o complemento"),
  Neighborhood: zod.string().min(1, "Informe seu bairro"),
  City: zod.string().min(1, "Informe sua cidade"),
  Uf: zod.string().min(1, "informe seu estado"),
  paymentMethod: zod.nativeEnum(Methods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
  
 


})

export type NewOrderData = zod.infer<typeof newOrderValidationSchema>


export function Checkout (){
    const {clearItemCoffeeShopCart} = useContext(CoffeeShopContext)
    const navigate = useNavigate()



    const newOrderForm = useForm<NewOrderData>({
      resolver: zodResolver(newOrderValidationSchema),
      defaultValues:{
        paymentMethod: undefined
      }
    })

    const {handleSubmit} = newOrderForm

    function CreateNewOrderCoffee(data: NewOrderData){
      clearItemCoffeeShopCart()
      navigate( '/coffee-delivery/success', {
        state: data
      })
    }

    return (
        <FormContainer onSubmit={handleSubmit(CreateNewOrderCoffee)} >
          <FormProvider {...newOrderForm}>
            <FormCompleteOrder />
            <SelectedItems />
          </FormProvider>
        </FormContainer>
      )
}


