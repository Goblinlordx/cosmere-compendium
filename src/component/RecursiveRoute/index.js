import React from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';

const RecursiveRoute = baseProps => {
  const {
    path: recurse,
    maxDepth = 10,
    errRedirect,
    component,
    render,
  } = baseProps;
  const Renderer = component || render;
  if (!Renderer) throw new Error('No component or render property passed');
  if (!recurse) throw new Error('Invalid recurse route property');
  const err = errRedirect && <Redirect to={errRedirect} />;
  const Recurser = props => {
    const {match, parentPath = []} = props;
    const {url, params} = match;
    const path = parentPath.concat(params);
    if (path.length > maxDepth) return {err};
    return (
      <Switch>
        <Route
          exact={true}
          path={`${url}`}
          render={renderProps => <Renderer {...renderProps} path={path} />}
        />
        <Route
          path={`${url}${recurse}`}
          render={recurseProps => (
            <Recurser {...recurseProps} parentPath={path} />
          )}
        />
        {err}
      </Switch>
    );
  };
  return <Route path={recurse} component={Recurser} />;
};

export default RecursiveRoute;
