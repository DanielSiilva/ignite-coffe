import { forwardRef, InputHTMLAttributes, ReactNode } from "react"

import {ContentContainer, PaymentInputContainer} from './styled'

type MethodProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode
    label: string
}

export const InputMethodsPayment = forwardRef<
HTMLInputElement,
MethodProps
>(({ id, icon, label, ...props }, ref) => {
return (
  <PaymentInputContainer>
    <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} required/>
    <label htmlFor={id}>
      <ContentContainer>
        {icon}
        {label}
      </ContentContainer>
    </label>
  </PaymentInputContainer>
)
})
