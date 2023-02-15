import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { InputQuantity } from '../../../../../components/InputQuantity'
import { CoffeeShopContext } from '../../../../../context/CartContext'
import {CoffeeContextCart} from '../../../../../reducers/reducer'

import {priceFormatter} from '../../../../../utils/formatter'

import {
    CartDetails,
    CartPurchase,
    ContainerCart,
    ButtonRemove,
    Prince
}from './styled'





interface Coffee {
    coffeeItem: CoffeeContextCart
}


export function CartSelect ({coffeeItem}: Coffee){
    const {addItemCoffeeShopCart, removeItemCoffeeShopCart, removeCoffeeShopCart} = useContext(CoffeeShopContext)

    const [amount, setAmount] = useState(coffeeItem.quantity)
    
    function handleAddQuantity(){
        if(amount < 20){
            setAmount((state) => state + 1)
            addItemCoffeeShopCart(coffeeItem)
        }
    }

    function handleRemoveQuantity(){
        if(amount >1){
            setAmount((state) => state - 1)
            removeItemCoffeeShopCart(coffeeItem)
        }
    }

    function handleRemoveCart (id: number){
        removeCoffeeShopCart(id)
    }


    

   


    return (
        <ContainerCart>
            <CartDetails>
                <img src={coffeeItem.image} />

                <CartPurchase>
                    <p>{coffeeItem.name}</p>
                    
                    <div>
                        <InputQuantity 
                            quantity={coffeeItem.quantity}
                            addQuantity = {handleAddQuantity}
                            removeQuantity = {handleRemoveQuantity}
                        
                        />

                        <ButtonRemove 
                            type='button'  
                            onClick={() => handleRemoveCart(coffeeItem.id)}
                        >
                            <Trash  size={16}/>
                            remover
                        </ButtonRemove>
                    </div>
                </CartPurchase>
            </CartDetails>
            
            <Prince>R$ {priceFormatter(coffeeItem.price)}</Prince>

        </ContainerCart>
    )
}