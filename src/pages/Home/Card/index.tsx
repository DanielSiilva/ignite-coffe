
import { CaretCircleDoubleDown, CarSimple, ShoppingCartSimple } from "phosphor-react"
import { useContext } from "react"
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
    price: number
}


interface ItemCardProps {
    coffee: ItemCard
}


export function Card({coffee}: ItemCardProps){
    
    const {addNewCoffeeCart} = useContext(CoffeeShopContext)

  

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

                <InputQuantity/> 

                <ButtonBuy>
                    <ShoppingCartSimple weight="fill" size={22} />
                </ButtonBuy>
                
            </ActionBuy>
           
            
        </Container>
    )
}


