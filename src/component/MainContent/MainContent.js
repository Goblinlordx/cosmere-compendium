import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import NotFound from 'component/NotFound';
import Home from 'component/Home';
import Series from 'component/Series';

class MainContent extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/" component={Home} />
        <Route exact path="/series" component={Series} />
        <Redirect to="/404" />
      </Switch>
    );
  }
}

export default MainContent;
