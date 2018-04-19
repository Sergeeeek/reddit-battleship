import { connect } from 'react-redux';
import { StatusView } from './status.view';
import { getShipState } from '../reducers/battleship.selectors';

const mapStateToProps = state => ({
  status: getShipState(state)
});

export const StatusContainer = connect(mapStateToProps, null)(StatusView);
