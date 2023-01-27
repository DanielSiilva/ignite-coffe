import { Bank, CreditCard, Money } from 'phosphor-react'
// import { useFormContext } from 'react-hook-form'
import { PaymentMethodInput } from './MethodInput'
import { PaymentMethodContainer } from './styled'


export const paymentMethods = {
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

export const PaymentMethods = () => {
  

  return (
    <PaymentMethodContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          // {...register('paymentMethod')}
        />
      ))}
    </PaymentMethodContainer>
  )
}