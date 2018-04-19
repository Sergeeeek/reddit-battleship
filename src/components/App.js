import React, { Component } from 'react';
import './App.css';
import { BoardContainer } from './BoardContainer';

class App extends Component {
  render() {
    return (
      <div className="game-container">
        <div className="game-container__status">
        </div>
        <div className="game-container__board-container">
          <BoardContainer className="game-container__board" />
        </div>
      </div>
    );
  }
}

export default App;
