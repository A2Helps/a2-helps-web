import React from 'react';
import Home from './pages/home';
import Success from './pages/success';
import Canceled from './pages/canceled';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { withAuthentication } from './components/auth/Session';

import { theme } from './theme';
const App = () => {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <Router>
        <Route path="/donation/cancel">
          <Canceled />
        </Route>
        <Route path="/donation/success">
          <Success />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </MuiThemeProvider>
  );
}

export default withAuthentication(App);
