import { Card } from "../Card";
import { Container, Title } from "./styled";


export function CoffeeList(){

    return(
        <Container>
            <Title>
                <h2>Nossos cafés</h2>
            </Title>

            <section>
                <Card />
            </section>
        </Container>
    )
}