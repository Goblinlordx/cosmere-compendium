import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { closeNav } from 'action/navdrawer';

const mapDispatchToProps = dispatch => ({
  closeNav: bindActionCreators(closeNav, dispatch),
});

const MenuItemLinkContainer = BaseComponent =>
  withRouter(connect(null, mapDispatchToProps)(BaseComponent));

export default MenuItemLinkContainer;
