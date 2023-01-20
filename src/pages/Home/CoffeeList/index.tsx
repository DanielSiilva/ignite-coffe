import { coffeesList } from "../../../data/coffees";
import { Card } from "../Card";

import { 
    Container, 
    Title, 
} from "./styled";


export function CoffeeList(){

    return(
        <Container>
            <Title>
                <h2>Nossos cafés</h2>
            </Title>

            <section>
                {coffeesList.map((coffee)=>{
                    return(
                        <Card 
                            key={coffee.id}
                            coffee={coffee}
                        />
                    )
                })}
            </section>
        </Container>
    )
}