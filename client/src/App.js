import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { GlobalStyle } from './components/themes/globalStyles';
import { theme } from './components/themes/colors';
import { ThemeProvider } from 'styled-components';
import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <h1>HELLO WORLD</h1>
    </ThemeProvider>
  );
}

export default App;
