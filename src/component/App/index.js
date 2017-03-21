import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import NavShell from '../NavShell';
import Home from '../Home';
import Admin from '../Admin';
import NotFound from '../NotFound';
import TypeIndex from '../TypeIndex';
import TypeView from '../TypeView';

class App extends Component {
  render() {
    return (
      <Router>
        <NavShell>
          <Switch>
            <Route exact path="/404" component={NotFound} />
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/:type" component={TypeIndex} />
            <Route path="/:type/:id" component={TypeView} />
            <Redirect to="/404" />
          </Switch>
        </NavShell>
      </Router>
    );
  }
}

export default App;
