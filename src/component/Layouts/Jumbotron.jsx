import React from 'react';
import {Jumbotron as Jumbo,Container} from 'react-bootstrap'
import styled from 'styled-components';
import boatImage from '../../assets/boatImage.jpg';


const Styled = styled.div `
    .jumbo{
        background: url(${boatImage}) no-repeat fixed bottom;
        background-size: cover;
        color:#ccc;
        height:200px;
        position:relative;
        z-index: -2;
    }

    .overlay{
        background-color:#000;
        opacity: 0.6;
        position:absolute;
        top:0;
        left:0;
        right:0;
        z-index:-1;
    }

`;

export const Jumbotron = ()=>(
    <Styled>
        <Jumbo fluids className="jumbo">
            <div className="overlay"></div>
        <Container>
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quae aspernatur blanditiis. Quae dolor qui dolorum pariatur dolores odio aut corrupti? Molestias, earum soluta similique a dolores aliquam numquam explicabo.</p>
        </Container>
        </Jumbo>
    </Styled>
)
