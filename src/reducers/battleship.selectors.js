import { createSelector } from 'reselect';

export const getBattleshipBoard = state => state.battleship.board;
export const getShipTypes = state => state.battleship.shipTypes;
export const getLayout = state =>
  Object.assign(
    {},
    ...state.battleship.layout.map(ship => ({ [ship.ship]: ship.positions }))
  )

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
