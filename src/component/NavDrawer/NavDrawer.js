import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItemLink from 'component/MenuItemLink';

class NavDrawer extends Component {
  render() {
    const { open, closeNav } = this.props;
    return (
      <Drawer open={open} docked={false} onRequestChange={closeNav}>
        <MenuItemLink to="/">Home</MenuItemLink>
        <MenuItemLink to="/books">Books</MenuItemLink>
      </Drawer>
    );
  }
}

export default NavDrawer;
