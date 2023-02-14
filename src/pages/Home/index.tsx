
import {Wrapper} from "./styled"



import { Information } from "./Information"
import { CoffeeList } from "./CoffeeList"
import { useContext } from "react"
import { CoffeeShopContext } from "../../context/CartContext"


export function Home (){

    const {coffees} = useContext(CoffeeShopContext)

    console.log(coffees)

    return(
        <Wrapper>
           <Information />
           <CoffeeList />
        </Wrapper>
    )
}