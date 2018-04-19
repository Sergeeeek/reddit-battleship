import { createSelector } from 'reselect';

export const getBattleshipBoard = state => state.battleship.board;
export const getShipTypes = state => state.battleship.shipTypes;
export const getLayout = state =>
  Object.assign(
    {},
    ...state.battleship.layout.map(ship => ({ [ship.ship]: ship.positions }))
  )
export const getScore = state => state.battleship.playerScore;

export const getShipState = createSelector(
  [getBattleshipBoard, getShipTypes, getLayout],
  (board, types, layout) => {
    let shipState = {};
    const ships = Object.keys(types);

    for (const ship of ships) {
      const shipPositions = layout[ship];
      const numberOfHits = shipPositions
        .reduce(
          (numberOfHits, pos) => board[pos[1]][pos[0]].isHit ? numberOfHits + 1 : numberOfHits,
          0
        );

      shipState[ship] = {
        hits: numberOfHits,
      };
    }

    return shipState;
  }
)

export const GAME_STATE_PLAYING = 'GAME_PLAYING';
export const GAME_STATE_FINISHED = 'GAME_FINISHED';

export const getGameState = createSelector(
  [getShipState, getShipTypes],
  (shipState, types) => {
    const typeNames = Object.keys(types);

    return typeNames.some(type => types[type].size !== shipState[type].hits) // if there are alive ships
      ? GAME_STATE_PLAYING
      : GAME_STATE_FINISHED;
  }
)
