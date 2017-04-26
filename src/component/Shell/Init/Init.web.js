import React, {Component, Children} from 'react';

const BasicUninitialized = () => <div>Uninitialized Unimplmemented</div>;

class InitShell extends Component {
  render() {
    const {
      init,
      children,
      uninit: Uninitialized = BasicUninitialized,
    } = this.props;
    if (!init) return <Uninitialized />;
    return (children && Children.only(children)) || null;
  }
}

export default InitShell;
export {BasicUninitialized};