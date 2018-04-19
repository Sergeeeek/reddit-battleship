import React, { Component } from 'react';
import './app.css';
import { BoardContainer } from './board.container';
import { StatusContainer } from './status.container';

class App extends Component {
  render() {
    return (
      <div className="game-container">
        <div className="game-container__status">
          <StatusContainer />
        </div>
        <div className="game-container__board-container">
          <BoardContainer className="game-container__board" />
        </div>
      </div>
    );
  }
}

export default App;
