import { MOVE_OBJECTS } from '../actions';
import moveObjects from './moveObjects';

const initailState = {
  angle: 45,
};

function reducer(state = initailState, action) {
  switch( action.type ) {
    case MOVE_OBJECTS:
      return moveObjects( state, action );
    default:
      return state;
  }
}

export default reducer;
