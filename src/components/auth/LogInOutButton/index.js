import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withFirebase } from '../Firebase';
import { AuthUserContext } from '../Session';
import {
  Link,
  useRouteMatch,
} from "react-router-dom";
import { LOGIN } from '../../../util/routes';


const useStyles = makeStyles(theme => ({
  root: {
    float: 'right',
  },
  buttonLink: {
    'text-decoration': 'none',
    color: 'white',
  },
}));

const LogInOutButton = ({ firebase }) => {
  const classes = useStyles();
  const { isExact: loginRoute = false } = { ...useRouteMatch(LOGIN) };

  return (
    <AuthUserContext.Consumer>
      {({ authUser, isAuthenticated }) => {
        return (isAuthenticated && authUser) ?
          <Button
            className={classes.root}
            variant="contained"
            color="secondary"
            onClick={firebase.doLogout}
          >
            Sign Out
          </Button> :
          loginRoute ?
            '' :
            <Button
              className={classes.root}
              variant="contained"
              color="secondary"
            >
              <Link to={LOGIN} className={classes.buttonLink}>Log in</Link>
            </Button>
      }}
    </AuthUserContext.Consumer>
  )
};

export default withFirebase(LogInOutButton);

