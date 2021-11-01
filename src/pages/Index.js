import React from 'react'
import styled from 'styled-components'
import Form from "../components/Form"

const Index = () => {
    return (
        <Wrapper>
            <Form />
        </Wrapper>
    )
}

export default Index

const Wrapper = styled.div `
    height: 1247px;
    width: 100%;
    background-image: linear-gradient(to bottom right, #4316db, #9076e7);
`