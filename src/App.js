import React, { Component } from 'react';
import Search from './components/Search';
import Display from './components/Display';
import styled from "styled-components";
import { Provider } from 'react-redux';
import store from './redux/store' ;

const StyledWrapper = styled.div`
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  `

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: ''
    }
  }
  
  render() {
    return (
      <Provider store={store}>
        <StyledWrapper>
          <Display />
          <Search />
        </StyledWrapper>
      </Provider>
    );
  }
}

export default App;
