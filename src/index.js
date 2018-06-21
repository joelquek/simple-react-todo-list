import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import ToDo from './App';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDo />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);