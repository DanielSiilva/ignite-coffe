import { CreditCard, Bank, Money } from "phosphor-react"
import { useFormContext } from "react-hook-form"


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
        <div>
            <h1> Metodo de pagamento</h1>
        </div>
    )
}