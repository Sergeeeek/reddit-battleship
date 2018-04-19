import React from 'react';
import './status.view.css';

const formatScore = (score) => '0' + score.toString().slice(-2);

const PlayerScore = ({ score, name, first }) => {
  return (<div className={`player-score ${first ? 'player-score--orange' : 'player-score--green'}`}>
    <p className="player-score__score-text">{formatScore(score)}</p>
    <hr className="player-score__divider" />
    <p className="player-score__player-name">{name}</p>
  </div>);
}

const ShipStatus = ({ ship, totalHealth, numberOfHits }) => {
  return (<div className="ship-status">
    <div className={`ship-status__element ship-status__ship-body ship-status__ship-body--${ship}`} />
    <div className="ship-status__element ship-body">
      {new Array(totalHealth)
        .fill(null)
        .map((_, i) => <div
          key={i}
          className={`ship-body__health ${i < numberOfHits ? 'ship-body__health--hit' : ''}`}
        />)}
    </div>
  </div>);
}

export const StatusView = ({ status, types, score }) => {
  const typeNames = Object.keys(types);
  return (<div className="status-container">
    <div className="status-container__player-score-container">
      <PlayerScore first={true} name="player 1" score={score} />
      <PlayerScore first={false} name="player 2" score={0} />
    </div>
    <div>
      {typeNames.map(type => <ShipStatus key={type} ship={type} totalHealth={types[type].size} numberOfHits={status[type].hits} />)}
    </div>
  </div>);
}
