import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {Wrapper, Information, TitleSubtitle, Highlights, Item01,Item02,Item03, Item04, Logo} from "./styled"




import Banner from "../../assets/banner.svg"


export function Home (){

    return(
        <Wrapper>
            <Information>
                <TitleSubtitle>
                    <h1>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>

                    <p>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </p>
                </TitleSubtitle>

                <Highlights>
                   <Item01>
                        <ShoppingCart size={22} weight='fill' />
                        <p> Compra simples e segura</p>
                   </Item01>
                    
                   <Item02>
                        <Package size={22} weight='fill'/>
                        <p> Embalagem mantém o café intacto</p>
                   </Item02>

                   <Item03>
                        <Timer size={22}  weight='fill'/>
                        <p> Entrega rápida e rastreada</p>
                   </Item03>

                   <Item04>
                        <Coffee size={22} weight='fill' />
                        <p> O café chega fresquinho até você</p>
                   </Item04>
                </Highlights>
            </Information>

            <Logo  src={Banner}/>
        </Wrapper>
    )
}