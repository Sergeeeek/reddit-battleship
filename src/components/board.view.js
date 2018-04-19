import React from 'react';
import './board.view.css';

export const BoardView = ({ board, onCellClick, className }) => {
  return (<div className={`board ${className ? className : ''}`}>
    {board.map((row, i) =>
      (<div key={i} className="board__row">
        {row.map((cell, j) => {
          const isShip = cell.ship;
          const hitClass = isShip ? 'board__cell--hit' : 'board__cell--miss';

          return (<div
            key={`${i}-${j}`}
            onClick={() => onCellClick(i, j)}
            className={`board__cell ${cell.isHit ? hitClass : ''}`}>
          </div>);
        }
        )}
      </div>)
    )}
  </div>);
}
