// import styled from 'styled-components';
import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router, BrowserRouter } from "react-router-dom";
// import Container from './styles/global';
import { store } from "./store";
import history from "./services/history";
import Routes from "./Routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Router history={history}>
      <BrowserRouter>
        <Provider store={store}>
          <Routes />
          <GlobalStyle />
        </Provider>
      </BrowserRouter>
    </Router>
  );
}

export default App;
