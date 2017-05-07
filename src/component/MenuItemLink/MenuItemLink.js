import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import styled from 'styled-components';

const PlainLink = styled(NavLink)`
  text-decoration: none;
`;

class MenuItemLink extends PureComponent {
  render() {
    const {
      from,
      to,
      activeClassName,
      activeStyle,
      closeNav,
      ...props
    } = this.props;
    if (!to) return <MenuItem {...props} />;
    const linkProps = {
      from,
      to,
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
