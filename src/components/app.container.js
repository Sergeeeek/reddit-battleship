import { connect } from 'react-redux';
import { getGameState } from '../reducers/battleship.selectors';
import { restart } from '../reducers/battleship.actions';
import App from './app.view';

const mapStateToProps = state => ({
  gameState: getGameState(state),
})

export const AppContainer = connect(mapStateToProps, { onRestart: restart })(App)
