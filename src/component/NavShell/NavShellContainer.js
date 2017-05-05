import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleNav } from 'action/navdrawer';

const mapDispatchToProps = dispatch => ({
  toggleNav: bindActionCreators(toggleNav, dispatch),
});

const Container = BaseComponent =>
  connect(null, mapDispatchToProps)(BaseComponent);

export default Container;
