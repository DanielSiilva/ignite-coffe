import { MapPin, ShoppingCart } from "phosphor-react"
import { useContext } from "react"
import {NavLink} from "react-router-dom"

import Logo from "../../assets/Logo.svg"
import { CoffeeShopContext } from "../../context/CartContext"
import { HeaderContainer, HeaderItems, Place, Cart } from "./styled"





export function Header(){

    const {coffee} = useContext(CoffeeShopContext)

    const QuantityOfItemsInCart = coffee.length


    return(
        <HeaderContainer>
            <NavLink to={'/'}>
                <img src={Logo} title ='Logo Coffee Delivery'/>
            </NavLink>
            

            <HeaderItems>
                <Place>
                    <MapPin size={22} weight='fill' />
                    <span> Porto Alegre, RS</span>
                </Place>
                
                <NavLink to={'/coffee-delivery/checkout'}>
                    <Cart>
                        <ShoppingCart size={22}  weight='fill'/>
                        
                        { QuantityOfItemsInCart >0 ? 
                            <div>{QuantityOfItemsInCart}</div>
                            :
                            null
                        }
                        
                    </Cart>
                </NavLink>
                
            </HeaderItems>
        </HeaderContainer>
    )
}