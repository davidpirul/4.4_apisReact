import React from "react";
import "../stylesheets/container.css"
import { Container, Card } from "react-bootstrap";

const PokeCard = ({ pokemons, page, setPage }) => {


    return (

        <Container className="containerCard">

            {pokemons.map((pokemon) => {

                return (
                  
                    <Card border="danger" bg="warning">
                        <Card.Img variant="top" src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted" key={pokemon.id}>#{pokemon.id}</Card.Subtitle>
                            <Card.Title key={pokemon.name}>{pokemon.name}</Card.Title>
                            <div  className="typeCard">
                            {pokemon.types.map((type, idx) => {
                                return (
                                    <Card.Footer key={idx}>{type.type.name}</Card.Footer>
                                )
                            })}
                            </div>                            
                        </Card.Body>
                    </Card>
                )
            })}
        </Container>
        
    )
}

export default PokeCard;