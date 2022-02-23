import { reducer, actions as sliceActions } from './slice';
import * as asyncAction from './actions';

const actions = {
  ...sliceActions,
  ...asyncAction,
};

export { reducer, actions };
