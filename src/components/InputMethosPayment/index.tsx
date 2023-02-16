import { forwardRef, InputHTMLAttributes, ReactNode } from "react"

import {InputContainer} from './styled'

type MethodProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode
    label: string
}

export const InputMethodsPayment = forwardRef<
HTMLInputElement,
MethodProps
>(({ id, icon, label, ...props }, ref) => {
return (
  <InputContainer>
    <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} required/>
    <label htmlFor={id}>
      <div>
        {icon}
        {label}
      </div>
    </label>
  </InputContainer>
)
})
