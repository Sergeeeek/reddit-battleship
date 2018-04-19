import React from 'react';
import './status.view.css';

const PlayerScore = ({ score, name, first }) => {
  return (<div className={`player-score ${first ? 'player-score--orange' : 'player-score--green'}`}>
    <p className="player-score__score-text">{score}</p>
    <hr className="player-score__divider" />
    <p className="player-score__player-name">{name}</p>
  </div>);
}

export const StatusView = ({ status }) => {
  return (<div className="status-container">
    <div className="status-container__player-score-container">
      <PlayerScore first={true} name="player 1" score="00" />
      <PlayerScore first={false} name="player 2" score="00" />
    </div>
  </div>);
}
