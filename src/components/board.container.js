import { connect } from 'react-redux';
import { BoardView } from './board.view';
import { getBattleshipBoard } from '../reducers/battleship.selectors';
import { shoot } from '../reducers/battleship.actions';

const mapStateToProps = state => ({
  board: getBattleshipBoard(state)
});

export const BoardContainer = connect(
  mapStateToProps,
  { onCellClick: shoot }
)(BoardView);
