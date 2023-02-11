
import { FormCompleteOrder } from './components/FormCompleteOrder'
import { SelectedItems } from './components/SelectedItems'


import {
  FormContainer,



} from './styled'



export function Checkout (){




    return (
        <FormContainer>
          <FormCompleteOrder />
          
          <SelectedItems />
        </FormContainer>
      )
}