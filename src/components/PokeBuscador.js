import React from "react"
import { InputGroup, Button, Container, Form} from 'react-bootstrap';
import { useState } from "react"
import "../stylesheets/container.css"

const PokeBuscador = ({ onSearch }) => {

    const [buscar, setBuscar] = useState("");

    const pokeBuscar = (e) => {
        setBuscar(e.target.value)
        if (e.target.value.length === 0) {
            onSearch(null);
        }
        
    }

    const click = async (e) => {
        onSearch(buscar)
    }





    return (

        <>
            <Container className="topBar" >
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Buscar Pokemon"
                        onChange={pokeBuscar}
                    />
                    <Button
                        variant="warning"
                        id="button-addon2"
                        onClick={click}
                    >
                        Buscar
                    </Button>
                </InputGroup>
            </Container>
        </>
    )

}

export default PokeBuscador;