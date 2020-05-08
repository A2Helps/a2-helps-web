import React from 'react';
import Home from './pages/home';
import Success from './pages/success';
import Canceled from './pages/canceled';
import SignInPage from './pages/signin';
import Phone from './pages/phone';
import Redeem from './pages/redeem';
import Donate from './pages/donate';
import Wire from './pages/wire';
import AdminPage from './pages/admin';
import NoMatch from './pages/404';
import FaqPage from './pages/faq';
import About from './pages/about';
import Donors from './pages/donors';
import Resources from './pages/resources';

import WireSuccess from './pages/wire-success';
import * as ROUTES from './util/routes';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { theme } from './theme';
import { UserSessionProvider } from './components/auth/Session';
import Order from './pages/order';
import OptIn from './pages/opt-in';

const App = () => {
  return (
    <UserSessionProvider>
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <Router>
          <Switch>
            <Route path={ROUTES.CANCEL}>
              <Canceled />
            </Route>
            <Route path={ROUTES.DONORS}>
              <Donors />
            </Route>
            <Route path={ROUTES.RESOURCES}>
              <Resources />
            </Route>
            <Route path={ROUTES.SUCCESS}>
              <Success />
            </Route>
            {/* verify */}
            <Route path={ROUTES.CODE}>
              <Phone />
            </Route>
            <Route path={ROUTES.REDEEM}>
              <Redeem />
            </Route>
            <Route exact path={ROUTES.DONATE}>
              <Donate />
            </Route>
            <Route exact path={ROUTES.WIRE}>
              <Wire />
            </Route>
            <Route exact path={ROUTES.WIRE_SUCCESS}>
              <WireSuccess />
            </Route>
            <Route exact path={ROUTES.FAQ}>
              <FaqPage />
            </Route>
            <Route exact path={ROUTES.ABOUT}>
              <About />
            </Route>
            <Route exact path={ROUTES.HOME}>
              <Home />
            </Route>
            <Route exact path={ROUTES.ORDER}>
              <Order />
            </Route>
            <Route exact path={ROUTES.OPT_IN}>
              <OptIn />
            </Route>
            {(process.env.NODE_ENV !== 'production') &&
              <Route path={ROUTES.LOGIN}>
                <SignInPage />
              </Route>
            }
            {/*
              These need to be separate because if they're nested
              it breaks <Switch>
            */}
            {(process.env.NODE_ENV !== 'production') &&
              <Route path={ROUTES.ADMIN}>
                <AdminPage />
              </Route>
            }
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </UserSessionProvider>
  );
}

export default React.memo(App);
