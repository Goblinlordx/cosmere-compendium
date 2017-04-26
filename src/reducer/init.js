import { createReducer } from 'utils';
import T from 'action/type';
const { FLUSH, INITIALIZE } = T;

const initReducer = createReducer(
  {
    [FLUSH]: state => state, // NOOP
    [INITIALIZE]: () => true,
  },
  false
);

export default initReducer;
