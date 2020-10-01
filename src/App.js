import React from 'react';
import Odometer from './odometer';
import Header from './header';
import Footer from './footer';
import './App.css';

const App = () => (
  <div className="App">
    <Header text="Will" />
    <Odometer />
    <Footer trademark="copyright 2020" />
  </div >
);


export default App;
