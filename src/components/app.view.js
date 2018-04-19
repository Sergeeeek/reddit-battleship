import React, { Component } from 'react';
import './app.css';
import { BoardContainer } from './board.container';
import { StatusContainer } from './status.container';
import { GAME_STATE_PLAYING, GAME_STATE_FINISHED } from '../reducers/battleship.selectors';

class App extends Component {
  render() {
    return (
      <div className="game-container">
        <div className="game-container__status">
          <StatusContainer />
        </div>
        <div className="game-container__board-container">
          {this.props.gameState === GAME_STATE_PLAYING &&
            <BoardContainer className="game-container__board" />
          }
          {this.props.gameState === GAME_STATE_FINISHED &&
            <div className="game-container__game-over">
              <div className="game-container__game-over-message">
                <p className="game-container__game-over-text">You won!</p>
                <button className="game-container__restart" onClick={this.props.onRestart}>Restart</button>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
