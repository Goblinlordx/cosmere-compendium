import T from 'action/type';
const { TOGGLE_NAV, SET_NAV } = T;

const toggleNav = () => ({
  type: TOGGLE_NAV,
});

const openNav = payload => ({
  type: SET_NAV,
  payload: true,
});

const closeNav = payload => ({
  type: SET_NAV,
  payload: false,
});

export { toggleNav, openNav, closeNav };
