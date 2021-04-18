import logo from './logo.svg';
import './App.css';

import Menu from "./Menu";

import React, { useState, useEffect, Component } from "react";

// function App() {


//   return <h1>Hello, world!</h1>

//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
// }

class App extends Component {
  render() {
    return (
      <div>
          <Menu/>
      </div>
    );
  }
}

export default App;
