import React, { Component } from 'react';
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
    const { children } = this.props;
    const { types } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}

export default NavShell;
