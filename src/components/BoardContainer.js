import { connect } from 'react-redux';
import { BoardView } from './BoardView';
import { getBattleshipBoard } from '../selectors/battleship';

const mapStateToProps = state => ({
  board: getBattleshipBoard(state)
});

export const BoardContainer = connect(mapStateToProps, null)(BoardView);
