import React from 'react';
import styled from "styled-components"


const StyledComponents = () => {

    const Container = styled.div`
        background: black;
        padding: 1rem;
        font-size: 2rem;
        color: white;

    `;
    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    
`
    return (
       
            <Container>
                <Title>안녕하세요</Title>
            </Container>
    );
};

export default StyledComponents;