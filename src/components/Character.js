// Write your Character component here
import React from 'react';
import styled from 'styled-components'
const CharacterContainer=styled.div`
    margin: auto;
    padding: 12px;
    width: 30%;
`
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
        <CharacterContainer>
            {character.map((character)=>{
             return <CharatererDiv>{character.name}</CharatererDiv>;
             })}
        </CharacterContainer>
    )
}
export default Character