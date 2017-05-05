import React, { Component } from 'react';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import store from 'store';
import InitShell from 'component/Shell/Init';
import NavShell from '../NavShell';
import Home from '../Home';
import Admin from '../Admin';
import NotFound from '../NotFound';
import TypeIndex from '../TypeIndex';
import TypeRenderer from '../TypeRenderer';
import RecursiveRoute from '../RecursiveRoute';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <MuiThemeProvider>
            <InitShell>
              <NavShell>
                <Switch>
                  <Route exact path="/404" component={NotFound} />
                  <Route exact path="/" component={Home} />
                  <Route exact path="/admin" component={Admin} />
                  <Route exact path="/:type" component={TypeIndex} />
                  <RecursiveRoute
                    path="/:type/:id"
                    errRedirect="/404"
                    component={TypeRenderer}
                  />
                  <Redirect to="/404" />
                </Switch>
              </NavShell>
            </InitShell>
          </MuiThemeProvider>
        </Provider>
      </Router>
    );
  }
}

export default App;