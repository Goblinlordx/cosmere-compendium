import T from 'action/type';
const { FLUSH } = T;

const createReducer = (addReactions, defState = {}) => {
  const getDefState = () => {
    if (typeof defState === 'object' && defState != null)
      return { ...defState };
    return defState;
  };
  const reactions = {
    [FLUSH]: () => getDefState(),
    ...addReactions,
  };
  return (state = getDefState(), { type, payload }) => {
    if (reactions[type]) return reactions[type](state, payload);
    return state;
  };
};

export { createReducer };
