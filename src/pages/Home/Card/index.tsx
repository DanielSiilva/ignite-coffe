

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



interface ItemCardProps {
    item: {
        id: number,
        tags:string[],
        name: string,
        info: string,
        image: string,
        price: number,
        amount: number
    }
}


export function Card({item}: ItemCardProps){
   

  

    return(
        <Container>
            <img src={item.image}/>
            
            <Header>
                <div>
                    {item.tags.map((item)=>{
                        return(
                        <p>{item}</p>
                        )
                    })}
                </div>
                
            </Header>
            
            <TitleInfo>
                <p>{item.name}</p>
                <p>{item.info}</p>
            </TitleInfo>

            <ActionBuy>
                <Price>
                    <p>R$</p>
                    <p>{priceFormatter(item.price)}</p>
                </Price>

                <Quantify>
                    <div>
                       <Minus 
                            
                            weight="bold"
                       />

                        <input 
                           
                            type='number' 
                            min={1} 
                            max={99} 
                        />
                       
                       <Plus 
                         
                         weight="bold"
                       
                       />
                    </div>
                    
                    <ItemBuy >
                        <ShoppingCartSimple size={22} weight="fill" />
                    </ItemBuy>
                </Quantify>
            </ActionBuy>
           
        
        </Container>
    )
}


