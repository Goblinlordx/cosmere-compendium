import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import NavDrawer from 'component/NavDrawer';
import { NavLink } from 'react-router-dom';
import { getTypes } from '../../api';
import './styles.css';

class NavShell extends Component {
  state = {};
  componentDidMount() {
    getTypes().then(types => {
      this.setState({ types });
    });
  }
  render() {
    const { children, toggleNav } = this.props;
    const { types } = this.state;
    return (
      <div>
        <AppBar
          title="Cosmere Compendium"
          onLeftIconButtonTouchTap={toggleNav}
        />
        <section>
          <nav className="navbar">
            <ul>
              <li key="home">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
              </li>
              <li key="admin">
                <NavLink exact to="/admin" activeClassName="active">
                  Admin
                </NavLink>
              </li>
              {types &&
                types.map(
                  type =>
                    !type.child &&
                    <li key={type.singular}>
                      <NavLink to={`/${type.singular.toLowerCase()}`}>
                        {type.plural}
                      </NavLink>
                    </li>
                )}
            </ul>
          </nav>
        </section>
        <section>
          {children}
        </section>
        <NavDrawer />
      </div>
    );
  }
}

export default NavShell;
