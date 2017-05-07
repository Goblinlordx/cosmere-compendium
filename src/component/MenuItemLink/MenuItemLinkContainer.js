import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeNav } from 'action/navdrawer';

const mapDispatchToProps = dispatch => ({
  closeNav: bindActionCreators(closeNav, dispatch),
});

const MenuItemLinkContainer = BaseComponent =>
  connect(null, mapDispatchToProps)(BaseComponent);

export default MenuItemLinkContainer;
