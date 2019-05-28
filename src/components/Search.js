import React ,{ Component } from 'react';
import styled from 'styled-components';
import '../linea_icon/styles.css';
const Form = styled.form`
    display: flex;
    justify-content: space-between;
    width: 40rem;
    font-size: 1.8rem;
    position: relative;
    padding: 1rem 0;
    color: rgb(146, 152, 153);
`
const I = styled.i`
    position: absolute;
    z-index: 2;
    top: 53%;
    left: 2%;
    transform: translateY(-42%);
    color: #632916;
`
const Input = styled.input`
    line-height: 1.8;
    padding-left: 11%;
    margin-right: 1rem;
    background-image: linear-gradient(90deg, rgba(252, 170, 27, 0.49) 10%, rgb(246, 252, 219) 15%);
    border: none;
    border-radius: 10rem;
    width: 74%;
`
const Button = styled.button`
    color: rgb(146, 152, 153);
    font-size: 80%;
    background-image: linear-gradient(to right bottom, rgb(252, 252, 252), rgb(246, 252, 219));
    border: none;
    border-radius: 10rem;
    padding: 0 .5rem;
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
                <Input type='text' ref={this.props.search.inputRef} onChange={this.props.search.handleInput} value={this.props.search.input}/>
                <Button type="submit">Search</Button>
            </Form>
        )
    }
}

export default Search;