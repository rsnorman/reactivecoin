import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlockChain from './model/blockchain';
import BlockChainEl from './BlockChain';

class App extends Component {
  render() {
    let blockChain = new BlockChain();
    blockChain.addBlock({to: 'Ryan', from: 'Scott', amount: '100'})

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ReactiveCoin</h1>
        </header>
        <BlockChainEl blockChain={blockChain} />
      </div>
    );
  }
}

export default App;
