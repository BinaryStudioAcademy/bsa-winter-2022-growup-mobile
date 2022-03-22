import { reducer, actions as sliceActions } from './slice';
import * as asyncActions from './actions';

const actions = {
  ...sliceActions,
  ...asyncActions,
};

export { reducer as opportunityReducer, actions as opportunityActions };
