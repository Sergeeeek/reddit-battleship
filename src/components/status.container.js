import { connect } from 'react-redux';
import { StatusView } from './status.view';
import { getShipState, getShipTypes, getScore } from '../reducers/battleship.selectors';

const mapStateToProps = state => ({
  status: getShipState(state),
  types: getShipTypes(state),
  score: getScore(state),
});

export const StatusContainer = connect(mapStateToProps, null)(StatusView);
