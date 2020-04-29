import React from 'react';
import {Container} from 'react-bootstrap'



//? {props.children é conteudo dentro de uma div customizada}

export const Layout  = (props)=>(
    <Container>
        {props.children} 
    </Container>
)