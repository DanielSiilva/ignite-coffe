
import {ShoppingCartSimple } from "phosphor-react"
import { useContext, useState } from "react"
import { InputQuantity } from "../../../components/InputQuantity"
import { CoffeeShopContext } from "../../../context/CartContext"

import { priceFormatter } from "../../../utils/formatter"


import {
    Container,
    Header,
    TitleInfo,
    ActionBuy,
    Price,
    ButtonBuy

} from "./styled"

interface ItemCard {
    id: number,
    tags:string[],
    name: string,
    info: string,
    image: string,
    price: number,
    quantity: number
}


interface ItemCardProps {
    coffee: ItemCard
}


export function Card({coffee}: ItemCardProps){
    
    const {addCoffeeShopCart} = useContext(CoffeeShopContext)

    const [amount, setAmount] = useState(coffee.quantity)
    
    function handleAddCoffeeCart(data: ItemCard){
        addCoffeeShopCart(data)
        setAmount(1)
    }

    function handleAddQuantity(){
        if(amount < 20){
            setAmount((state) => state + 1)
        }
    }

    function handleRemoveQuantity(){
        if(amount >1){
            setAmount((state) => state - 1)
        }
    }


    return(
        <Container>
            <img src={coffee.image}/>
            
            <Header>
                <div>
                    {coffee.tags.map((item, index)=>{
                        return(
                        <p  key={index}>{item}</p>
                        )
                    })}
                </div>
                
            </Header>
            
            <TitleInfo>
                <p>{coffee.name}</p>
                <p>{coffee.info}</p>
            </TitleInfo>

            <ActionBuy>
                <Price>
                    <p>R$</p>
                    <p>{priceFormatter(coffee.price)}</p>
                </Price>

                <InputQuantity
                    addQuantity={handleAddQuantity}
                    quantity = {amount}
                    removeQuantity={handleRemoveQuantity}
                /> 

                <ButtonBuy onClick={()=> handleAddCoffeeCart({...coffee, quantity: amount})}>
                    <ShoppingCartSimple weight="fill" size={22} />
                </ButtonBuy>
                
            </ActionBuy>
           
            
        </Container>
    )
}


