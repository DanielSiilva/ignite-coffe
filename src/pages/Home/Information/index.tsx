import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"

import * as C from './styled'

import Banner from "../../../assets/banner.svg"

export function Information (){


    return (
        <C.Container>
             <C.Introduction>
                <C.TitleSubtitle>
                    <h1>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>

                    <p>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </p>
                </C.TitleSubtitle>

                <C.Highlights>
                   <C.Item01>
                        <ShoppingCart size={22} weight='fill' />
                        <p> Compra simples e segura</p>
                   </C.Item01>
                    
                   <C.Item02>
                        <Package size={22} weight='fill'/>
                        <p> Embalagem mantém o café intacto</p>
                   </C.Item02>

                   <C.Item03>
                        <Timer size={22}  weight='fill'/>
                        <p> Entrega rápida e rastreada</p>
                   </C.Item03>

                   <C.Item04>
                        <Coffee size={22} weight='fill' />
                        <p> O café chega fresquinho até você</p>
                   </C.Item04>
                </C.Highlights>
                
                
            </C.Introduction>

            <C.Logo  src={Banner}/>
          
            
        </C.Container>
    )
}