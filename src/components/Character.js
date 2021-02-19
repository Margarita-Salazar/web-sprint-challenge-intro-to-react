// Write your Character component here
import React from 'react';
import styled from 'styled-components'
const CharatererDiv = styled.div`
    opacity: 1;
    color: black;
    margin: 1rem auto;
    border: 1px solid black;
    border-radius: 3px;
    padding: 16px;
    background-color: white;
    text-align: left;

`
function Character(props){
    const { character } = props
    return (
        <CharatererDiv>
            <p>Name: {character.name}</p>
        </CharatererDiv>
    )
}
export default Character