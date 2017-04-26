import T from 'action/type';
const {INITIALIZE} = T;

const initApp = () => ({
  type: INITIALIZE,
});

export {initApp};