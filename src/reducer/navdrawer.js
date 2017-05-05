import { createReducer } from 'utils';
import T from 'action/type';
const { TOGGLE_NAV, SET_NAV } = T;

const navdrawerReducer = createReducer(
  {
    [TOGGLE_NAV]: state => !state, // NOOP
    [SET_NAV]: (_, open) => open,
  },
  false
);

export default navdrawerReducer;
