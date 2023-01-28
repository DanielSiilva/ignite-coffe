import { coffeesList } from "../../../data/coffees";
import { Card } from "../Card";

import * as C from './styled'


export function CoffeeList(){

    return(
        <C.Container>
            <C.Title>
                <h2>Nossos cafés</h2>
            </C.Title>

            <section>
                {coffeesList.map((coffee)=>{
                    return(
                        <Card 
                            key={coffee.id} 
                            item={coffee}
                        />
                    )
                })}
            </section>
        </C.Container>
    )
}