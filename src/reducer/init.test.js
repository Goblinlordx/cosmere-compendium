import initReducer from './init';
import T from 'action/type';
const {FLUSH, INITIALIZE} = T;

describe('initReducer', () => {
  it('should have a default state is false', () => {
    const state = initReducer(undefined, {type: 'asdf', payload: 'asdf'});
    expect(state).toBe(false);
  });
  it('should not change state when FLUSH is called', () => {
    const state = initReducer(true, {type: FLUSH});
    expect(state).toBe(true);
  });
  it('should change state to true when receiving INITIALIZE action', () => {
    const state = initReducer(false, {type: INITIALIZE});
    expect(state).toBe(true);
  });
});