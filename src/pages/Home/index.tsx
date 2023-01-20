
import {Wrapper} from "./styled"



import { Information } from "./Information"
import { CoffeeList } from "./CoffeeList"


export function Home (){

    return(
        <Wrapper>
           <Information />
           <CoffeeList />
        </Wrapper>
    )
}