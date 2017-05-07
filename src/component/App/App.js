import React, { Component } from 'react';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  brown100,
  brown500,
  brown700,
  white,
  darkBlack,
  grey300,
} from 'material-ui/styles/colors';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'store';
import InitShell from 'component/Shell/Init';
import NavShell from 'component/NavShell';
import MainContent from 'component/MainContent';

injectTapEventPlugin();

const baseTheme = {
  palette: {
    primary1Color: brown500,
    primary2Color: brown100,
    primary3Color: brown700,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
  },
};

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
            <InitShell>
              <NavShell>
                <MainContent />
              </NavShell>
            </InitShell>
          </MuiThemeProvider>
        </Provider>
      </Router>
    );
  }
}

export default App;
