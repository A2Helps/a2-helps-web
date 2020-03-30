import React from 'react';
import Home from './pages/home';
import Success from './pages/success';
import Canceled from './pages/canceled';
import SignInPage from './pages/signin';
import Phone from './pages/phone';
import Confirm from './pages/confirm';
import Redeem from './pages/redeem';
import AdminPage from './pages/admin';
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
        {/* verify */}
        <Route path="/v/:code">
          <Phone />
        </Route>
        <Route path="/confirm">
          <Confirm />
        </Route>
        <Route path="/redeem">
          <Redeem />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <SignInPage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
      </Router>
    </MuiThemeProvider>
  );
}

export default withAuthentication(App);
