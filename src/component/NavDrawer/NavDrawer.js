import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItemLink from 'component/MenuItemLink';
import AppBar from 'material-ui/AppBar';

class NavDrawer extends Component {
  render() {
    const { open, closeNav } = this.props;
    return (
      <Drawer open={open} docked={false} onRequestChange={closeNav}>
        <AppBar title="Cosmere" showMenuIconButton={false} />
        <MenuItemLink to="/" exact={true}>Home</MenuItemLink>
        <MenuItemLink to="/series" exact={true}>Series</MenuItemLink>
        <MenuItemLink to="/books">Books</MenuItemLink>
      </Drawer>
    );
  }
}

export default NavDrawer;
