import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color:rgb(43, 114, 229);
    width: 100%;
    font-size: 1rem;
    border-radius: .3rem;
    border: .2rem solid rgb(43, 114, 229);
    margin-top: 1rem;
    & > input {
        display: inline-block;
        width: 100%;
        font-size: 1.8rem;
        padding: .3rem;
        border: none;
        outline: none;
        background-color: rgb(84, 144, 242);
        color: #fff;
    }
`;

const Search = ( props ) => {
    return (
        <Wrapper>
                <input onChange={props.changed} value={props.city} type='text'/>
        </Wrapper>
    )
}



export default Search;