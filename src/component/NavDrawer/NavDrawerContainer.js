import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeNav } from 'action/navdrawer';

const mapDispatchToProps = dispatch => ({
  closeNav: bindActionCreators(closeNav, dispatch),
});

const Container = BaseComponent =>
  connect(({ navdrawer }) => ({ open: navdrawer }), mapDispatchToProps)(
    BaseComponent
  );

export default Container;
