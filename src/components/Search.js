import React ,{ Component } from 'react';
import styled from 'styled-components';
import '../linea_icon/styles.css';
const Form = styled.form`
    width: 100%;
    font-size: 1rem;
    border-radius: .3rem;
    margin-top: 1rem;
    position: relative;
    color: #fff;
    & > input {
        display: inline-block;
        font-size: 2.2rem;
        line-height: 5rem;
        padding-left: 5rem;
        margin-right: .5rem;
        border-radius: .3rem;
        border: none;
        background-color:rgb(43, 114, 229);
        width: 78%;
        float: left;
        
    }
    & > input:focus, input:valid {
        color: #fff;
    }
    & > i {
        vertical-align: middle;
        position: absolute;
        top: .5rem;
        left: 0;
        z-index: 2;
        height: 6rem;
        font-size: 2.6rem;
        padding: .5rem;
        
    }
    & > button {
        width: 20%;
        margin-left: auto;
        border: none;
        float: right;
        height: 5rem;
        background-color:rgb(43, 114, 229);
        color: inherit;
        border-radius: .3rem;
    }
`

class Search extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Form onSubmit={this.props.changed}>
                <i onClick={this.props.handleCoords} className='icon-basic-geolocalize-01'></i>
                <input type='text' ref={this.props.inputRef} onChange={this.props.handleInput} value={this.props.input}/>
                <button type="submit">Search</button>
            </Form>
                
                    
                
            
        )
    }
}

export default Search;