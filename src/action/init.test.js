import {initApp} from './init';
import T from 'action/type';
const {INITIALIZE} = T;

describe('init action creator', () => {
  it('should create an action with type INITIALIZE', () => {
    const {type} = initApp();
    expect(type).toBe(INITIALIZE);
  });
});