import React from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';

const createRecursiveRoute = opts => {
  const {recurse, maxDepth = 10, errRedirect, component, render} = opts;
  const Renderer = component || render;
  if (!Renderer) throw new Error('No render function or component provided');
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
          render={({match: nextMatch}) => (
            <Recurser match={nextMatch} parentPath={path} />
          )}
        />
        {err}
      </Switch>
    );
  };
  return Recurser;
};

export default createRecursiveRoute;
