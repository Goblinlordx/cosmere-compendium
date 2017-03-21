import React, {Component} from 'react';
import {Switch, Route, Redirect, NavLink} from 'react-router-dom';
import {getInstance} from '../../api';

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
    const {path} = this.props;
    const {type, id} = path[path.length - 1];
    return this.loadInstance(type, id);
  }
  componentWillUpdate(next) {
    const {url: currentUrl} = this.props;
    const {url: nextUrl} = next;
    if (currentUrl !== nextUrl) {
      const {path} = this.props;
      const {type, id} = path[path.length - 1];
      this.loadInstance(type, id);
    }
  }
  render() {
    const {path, url} = this.props;
    const {loading, instance: c} = this.state;
    if (loading) {
      return <section>Loading</section>;
    }
    if (!c) return <Redirect to="/404" />;
    console.log(path);
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

class TypeView extends Component {
  render() {
    if (false) return <Redirect to="/404" />;
    const {match: {url, params: {type, id}}, parentPath = []} = this.props;
    const path = parentPath.concat({type, id});
    return (
      <Switch>
        <Route
          exact={true}
          path={url}
          render={() => <TypeRenderer path={path} url={url} />}
        />
        <Route
          path={`${url}/:type/:id`}
          render={({match}) => <TypeView match={match} parentPath={path} />}
        />
        <Redirect path="/404" />
      </Switch>
    );
  }
}

export default TypeView;
