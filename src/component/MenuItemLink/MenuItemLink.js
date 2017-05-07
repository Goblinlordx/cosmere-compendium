import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import styled from 'styled-components';

const PlainLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
`;

class MenuItemLink extends Component {
  render() {
    const {
      from,
      to,
      exact,
      activeClassName = 'active',
      activeStyle,
      closeNav,
      match,
      location,
      history,
      staticContext,
      ...props
    } = this.props;
    if (!to) return <MenuItem {...props} />;
    const linkProps = {
      from,
      to,
      exact,
      activeClassName,
      activeStyle,
      onTouchTap: closeNav,
    };
    return (
      <PlainLink {...linkProps}>
        <MenuItem {...props} />
      </PlainLink>
    );
  }
}

export default MenuItemLink;
