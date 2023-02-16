import { CreditCard, Bank, Money } from "phosphor-react"
import { useFormContext } from "react-hook-form"
import { InputMethodsPayment } from "../InputMethosPayment"
import { PaymentMethodContainer } from "./styled"


export const Methods = {
    credit: {
      label: 'Cartão de crédito',
      icon: <CreditCard size={16} />,
    },
    debit: {
      label: 'Cartão de débito',
      icon: <Bank size={16} />,
    },
    money: {
      label: 'Dinheiro',
      icon: <Money size={16} />,
    },
  }



export function PaymentMethods () {

    const {register} = useFormContext()


    return (
        <PaymentMethodContainer>
           {Object.entries(Methods).map(([key, { label, icon }]) => (
                <InputMethodsPayment
                  key={label}
                  id={key}
                  icon={icon}
                  label={label}
                  value={key}
                  {...register('paymentMethod')}
                />
            ))}
        </PaymentMethodContainer>
    )
}