import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/todos';
import Links from './components/links';
import Addtodo from './components/addtodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Links/>
        <Todos/>
        <Addtodo/>
        <div>Wang Jing</div>
      </div>
    );
  }
}

export default App;
