import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {initApp} from 'action/init';

const Container = BaseComponent => {
  class InitContainer extends Component {
    componentDidMount() {
      const {init, initApp} = this.props;
      if (!init) initApp();
    }
    render() {
      return <BaseComponent {...this.props} />;
    }
  }
  const mapDispatchToProps = dispatch => ({
    initApp: bindActionCreators(initApp, dispatch),
  });
  InitContainer = connect(({init}) => ({init}), mapDispatchToProps)(
    InitContainer
  );
  return InitContainer;
};

export default Container;