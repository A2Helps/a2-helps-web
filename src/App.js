import React from 'react';
import Home from './pages/home';
import Success from './pages/success';
import Canceled from './pages/canceled';
import SignInPage from './pages/signin';
import Phone from './pages/phone';
import Confirm from './pages/confirm';
import Redeem from './pages/redeem';
import AdminPage from './pages/admin';
import * as ROUTES from './util/routes';
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
        <Route path={ROUTES.CANCEL}>
          <Canceled />
        </Route>
        <Route path={ROUTES.SUCCESS}>
          <Success />
        </Route>
        {/* verify */}
        <Route path={ROUTES.CODE}>
          <Phone />
        </Route>
        <Route path={ROUTES.CONFIRM}>
          <Confirm />
        </Route>
        <Route path={ROUTES.REDEEM}>
          <Redeem />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.LOGIN}>
          <SignInPage />
        </Route>
        <Route path={ROUTES.ADMIN}>
          <AdminPage />
        </Route>
      </Router>
    </MuiThemeProvider>
  );
}

export default withAuthentication(React.memo(App));
