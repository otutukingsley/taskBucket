import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { GlobalStyle } from './components/themes/globalStyles';
import { theme } from './components/themes/colors';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Landingpage from './components/pages/landingpage/Landingpage';
import Navbar from './components/layouts/Navbar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Navbar/>
      <Landingpage/>
    </ThemeProvider>
  );
}

export default App;
