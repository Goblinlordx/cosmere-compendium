import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import NavDrawer from 'component/NavDrawer';
import { getTypes } from '../../api';
import styled from 'styled-components';
import './styles.css';

const Content = styled.section`
  padding: 1em;
`;

class NavShell extends Component {
  state = {};
  componentDidMount() {
    getTypes().then(types => {
      this.setState({ types });
    });
  }
  render() {
    const { children, toggleNav } = this.props;
    return (
      <div>
        <AppBar
          title="Cosmere Compendium"
          onLeftIconButtonTouchTap={toggleNav}
        />
        <Content>
          {children}
        </Content>
        <NavDrawer />
      </div>
    );
  }
}

export default NavShell;
