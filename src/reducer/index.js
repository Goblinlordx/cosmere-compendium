import { combineReducers } from 'redux';
import init from './init';
import navdrawer from './navdrawer';

const rootReducer = combineReducers({
  init,
  navdrawer,
});

export default rootReducer;
