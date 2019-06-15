import React ,{ Component } from 'react';
import styled from 'styled-components';
import '../linea_icon/styles.css';
const Form = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    font-size: 1.8rem;
    color: rgb(133, 135, 140);
    width: 60%;
    @media only screen and (max-width: 37.5em) {
        width: 95%;
    }
    
`
const I = styled.i`
    position: absolute;
    z-index: 2;
    top: 2.5rem;
    left: .5rem;
    color: rgb(133, 135, 140);
    font-size: 1.8rem;
    transition: all .3s;
    
    &:hover {
        transform: scale(1.2)
    }
`
const Input = styled.input`
    background-color: rgb(235, 237, 244);
    border: none;
    margin-bottom: 1rem;
    padding: .5rem 0 .5rem 2.5rem;
    border-radius: .3rem;
    &:placeholder-shown {
        padding-left: 3rem;
    }
`
const Button = styled.button`
    color: inherit;
    font-size: 1.8rem;
    background-color: rgb(235, 237, 244);
    border: none;
    border-radius: .3rem;
    padding: .5rem;
    transition: all .2s;
    
    &:hover {
        transform: translateY(-0.5rem);
        box-shadow: 0 .5rem 2rem rgba(#000, .2);
        
    }
`


class Search extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Form onSubmit={this.props.search.changed}>
                <I onClick={this.props.search.handleCoords} className='icon-basic-geolocalize-01' />
                <Input type='text' ref={this.props.search.inputRef} onChange={this.props.search.handleInput} value={this.props.search.input} placeholder="Write your city"/>
                <Button type="submit">Search</Button>
            </Form>
        )
    }
}

export default Search;