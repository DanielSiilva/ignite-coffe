

import {
    Container,
    Header,
    TitleInfo,

} from "./styled"



export interface Coffee{
    id: number,
    tags:string[],
    name: string,
    info: string,
    image: string,
    price: number
}

interface CoffeeProps{
    coffee: Coffee
}

export function Card({coffee}: CoffeeProps){

    return(
        <Container>
            <img src={coffee.image}/>
            
            <Header>
                <div>
                    {coffee.tags.map((item)=>{
                        return(
                        <p>{item}</p>
                        )
                    })}
                </div>
                
            </Header>
            
            <TitleInfo>
                <p>{coffee.name}</p>
                <p>{coffee.info}</p>
            </TitleInfo>

            
           
        
        </Container>
    )
}