import React, {Component} from 'react';
import {Switch, Route, Redirect, NavLink} from 'react-router-dom';

const dummy = [
  {
    id: 0,
    name: 'Character Name',
    class: 'Human',
    subclass: 'Male',
    physicalDesc: 'Description of character',
    descriptors: [
      {
        id: 1,
        type: 'descriptors',
        references: [{
          series: 0,
          book: 0,
          chapter: 0,
        }],
        links: [{
          id: 1,
          type: 'characters',
          name: 'test1',
        }],
        description: 'Test character description',
      }
    ],
    events: [
      {
        id: 0,
        type: 'events',
        references: [{
          series: 0,
          book: 0,
          chapter: 0,
        }],
        links: [{
          id: 1,
          type: 'characters',
          name: 'test1',
        }],
        description: 'Test character event',
      },
    ],
    children: [
      {
        id: 1,
        type: 'characters',
        name: 'test1',
      },
    ],
  },
  {
    id: 1,
    name: 'Character Name',
    class: 'Human',
    subclass: 'Male',
    physicalDesc: 'Description of character',
    descriptors: [
      {
        id: 1,
        type: 'descriptors',
        references: [{
          series: 0,
          book: 0,
          chapter: 0,
        }],
        links: [{
          id: 1,
          type: 'characters',
          name: 'test1',
        }],
        description: 'Test character description',
      }
    ],
    events: [
      {
        id: 0,
        type: 'events',
        references: [{
          series: 0,
          book: 0,
          chapter: 0,
        }],
        links: [{
          id: 1,
          type: 'characters',
          name: 'test1',
        }],
        description: 'Test character event',
      },
    ],
    children: [
      {
        id: 1,
        type: 'characters',
        name: 'test1',
      },
    ],
  },
]

const has = (c, str) => {
  if (c[str] instanceof Array) return c[str] && c[str].length > 0;
  return !!c[str];
}

class TypeRenderer extends Component {
  render() {
    const {url, type, id} = this.props;
    console.log(url, type, id);
    const c = dummy.find(char => char.id === (id|0));
    return (
      <section>
        <h1>{c.name}</h1>
        {
          has(c, 'class') && (
            <article>
              <h4>Classification: {c.class}
                {c.subclass && ` - ${c.subclass}`}
              </h4>
            </article>
          )
        }
        {
          has(c, 'events') && (
            <article>
              <h3>Timeline</h3>
              <ul>
                {
                  c.events.map(event => <li key={event.id}>{event.description}</li>)
                }
              </ul>
            </article>
          )
        }
        {
          has(c, 'descriptors') && (
            <article>
              <h3>Additional Character Information</h3>
              <ul>
                {
                  c.descriptors.map(event => <li key={event.id}>{event.description}</li>)
                }
              </ul>
            </article>
          )
        }
        {
          has(c, 'children') && (
            <div>
              <nav>
                <ul>
                  {
                    c.children.map(child => <NavLink key={child.id} to={`${url}/${child.type}/${child.id}`}>{child.name}</NavLink>)
                  }
                </ul>
              </nav>
            </div>
          )
        }

      </section>
    )
  }
}

class SubTypeRenderer extends Component {
  render() {
    const {url, parentType} = this.props;
    return (
      <section>
        <nav>
          <NavLink to={url}>{parentType}</NavLink>
        </nav>
        <Route path={`${url}/:type/:id`} component={TypeView}/>
      </section>
    )
  }
}

class TypeView extends Component {
  render() {
    if (false) return <Redirect to='/404'/>;

    const {match:{url, params:{type, id}}} = this.props;
    return (
      <Switch>
        <Route exact={true} path={url} render={() => (
          <TypeRenderer url={url} type={type} id={id}/>
        )} />
        <Route path={`${url}`} render={() => <SubTypeRenderer parentType={type} url={url}/>} />
      </Switch>
    )
  }
}

export default TypeView;