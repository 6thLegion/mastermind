import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={'Mastermind project'} />
        <Content contentTitle={'Contenido'} />
      </div>
    );
  }
}

export default App;
