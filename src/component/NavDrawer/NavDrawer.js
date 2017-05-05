import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';

class NavDrawer extends Component {
  render() {
    const { open, closeNav } = this.props;
    return <Drawer open={open} docked={false} onRequestChange={closeNav} />;
  }
}

export default NavDrawer;
