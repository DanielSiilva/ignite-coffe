

import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"




import { priceFormatter } from "../../../utils/formatter"


import {
    Container,
    Header,
    TitleInfo,
    ActionBuy,
    Price,
    ItemBuy,
    Quantify,
    

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

                
            </ActionBuy>
           
        
        </Container>
    )
}


