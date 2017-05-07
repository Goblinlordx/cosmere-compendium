import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleNav } from 'action/navdrawer';

const mapDispatchToProps = dispatch => ({
  toggleNav: bindActionCreators(toggleNav, dispatch),
});

const Container = BaseComponent =>
  withRouter(connect(null, mapDispatchToProps)(BaseComponent));

export default Container;
