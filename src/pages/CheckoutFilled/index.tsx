import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../context/CartContext'
import { CartsItem } from './CartItems'
import {AddressContainer,BuildingNumberInput, ButtonContainer, CityInput, ComplementInput, CompleteOrderContainer, ConfirmOrderContainer, FormContainer, InputsContainer, NeighborhoodInput,PaymentContainer, PaymentsLabel,PriceContainer,SelectedCoffeesContainer,StateInput,StreetInput,ZIPCodeInput} from './styled'



export function Checkout (){

  const {itemsCart} = useContext(OrderContext)


    return (
        <FormContainer >
          <CompleteOrderContainer>
            <h2>
              Complete seu pedido
            </h2>
            <AddressContainer>
              <h3>
                <MapPinLine color="#C47F17" size={22} />
                Endereço de Entrega
              </h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
              <InputsContainer>
                <ZIPCodeInput
                //   type="number"
                  placeholder="CEP"
                  
                />
    
                <StreetInput
                  type="text"
                  placeholder="Rua"
                  
                />
    
                <BuildingNumberInput
                  type="number"
                  placeholder="Número"
                  
                />
    
                <ComplementInput
                  type="text"
                  placeholder="Complemento"
                 
                />
    
                <NeighborhoodInput
                  type="text"
                  placeholder="Bairro"
                  
                />
    
                <CityInput type="text" placeholder="Cidade"  />
    
                <StateInput type="text" placeholder="UF"  />
              </InputsContainer>
            </AddressContainer>
    
            <PaymentContainer>
              <h3>
                <CurrencyDollar color="#8047F8" size={22} />
                Pagamento
              </h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
    
              <InputsContainer>
                <PaymentsLabel htmlFor="CreditCard">
                  <CreditCard size={16} color="#8047F8" />
                  Cartão de crédito
                  <input
                    type="radio"
                    id="CreditCard"
                    value="Cartão de Crédito"
                    
                  />
                </PaymentsLabel>
    
                <PaymentsLabel htmlFor="DebitCard">
                  <Bank size={16} color="#8047F8" />
                  Cartão de débito
                  <input
                    type="radio"
                    id="DebitCard"
                    value="Cartão de Débito"
                   
                  />
                </PaymentsLabel>
    
                <PaymentsLabel htmlFor="Money">
                  <Money size={16} color="#8047F8" />
                     Dinheiro
                  <input
                    type="radio"
                    id="Money"
                    value="Dinheiro"
                    
                  />
                </PaymentsLabel>
              </InputsContainer>
            </PaymentContainer>
          </CompleteOrderContainer>
    
          <SelectedCoffeesContainer>
            <h2>Cafés selecionados</h2>
            <ConfirmOrderContainer>
              {itemsCart.map((item) => {
                return (
                    <CartsItem
                      key={item.id}
                      name={item.id}
                      amount={item.amount}
                      image={item.image}
                      price={item.price}
                    />
                  )
             })}




    
              <PriceContainer>
                <div>
                  <span>Total de itens</span>
                  <span>R$ </span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$ </span>
                </div>
                <div>
                  <strong>Total</strong>
                  <strong>R$ </strong>
                </div>
              </PriceContainer>
    
              <ButtonContainer >
                confirmar pedido
              </ButtonContainer>
            </ConfirmOrderContainer>
          </SelectedCoffeesContainer>
        </FormContainer>
      )
}