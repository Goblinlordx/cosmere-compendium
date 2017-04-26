import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { getInstance } from '../../api';

const has = (c, str) => {
  if (c[str] instanceof Array) return c[str] && c[str].length > 0;
  return !!c[str];
};

class TypeRenderer extends Component {
  state = {
    loading: true,
  };
  loadInstance(type, id) {
    return getInstance(type, id).then(instance => {
      this.setState({
        loading: false,
        instance,
      });
    });
  }
  componentDidMount() {
    const { path } = this.props;
    const { type, id } = path[path.length - 1];
    return this.loadInstance(type, id);
  }
  componentWillUpdate(next) {
    const { match: { url: currentUrl } } = this.props;
    const { match: { url: nextUrl } } = next;
    if (currentUrl !== nextUrl) {
      const { path } = this.props;
      const { type, id } = path[path.length - 1];
      this.loadInstance(type, id);
    }
  }
  render() {
    const { match: { url } } = this.props;
    const { loading, instance: c } = this.state;
    if (loading) {
      return <section>Loading</section>;
    }
    if (!c) return <Redirect to="/404" />;
    return (
      <section>
        <h1>{c.name}</h1>
        {has(c, 'class') &&
          <article>
            <h4>
              Classification: {c.class}
              {c.subclass && ` - ${c.subclass}`}
            </h4>
          </article>}
        {has(c, 'events') &&
          <article>
            <h3>Timeline</h3>
            <ul>
              {c.events.map(event => (
                <li key={event.id}>{event.description}</li>
              ))}
            </ul>
          </article>}
        {has(c, 'descriptors') &&
          <article>
            <h3>Additional Character Information</h3>
            <ul>
              {c.descriptors.map(event => (
                <li key={event.id}>{event.description}</li>
              ))}
            </ul>
          </article>}
        {has(c, 'children') &&
          <div>
            <nav>
              <ul>
                {c.children.map(child => (
                  <NavLink
                    key={child.id}
                    to={`${url}/${child.type}/${child.id}`}
                  >
                    {child.name}
                  </NavLink>
                ))}
              </ul>
            </nav>
          </div>}

      </section>
    );
  }
}

export default TypeRenderer;
