import { forwardRef, InputHTMLAttributes, ReactNode } from "react"

type MethodProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode
    label: string
}

export const InputMethodsPayment = forwardRef<
HTMLInputElement,
MethodProps
>(({ id, icon, label, ...props }, ref) => {
return (
  <div>
    <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
    <label htmlFor={id}>
      <div>
        {icon}
        {label}
      </div>
    </label>
  </div>
)
})
