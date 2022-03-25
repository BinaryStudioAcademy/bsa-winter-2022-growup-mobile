import { reducer, actions as sliceActions } from './slice';
import * as asyncActions from './actions';

const actions = {
  ...asyncActions,
  ...sliceActions,
};

export { reducer as educationReducer, actions as educationActions };
