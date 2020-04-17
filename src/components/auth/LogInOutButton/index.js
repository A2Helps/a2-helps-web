import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useSession } from '../Session';
import { useFirebase } from '../Firebase';
import {
  Link
} from "react-router-dom";
import { LOGIN } from '../../../util/routes';


const useStyles = makeStyles(() => ({
  root: {
    float: 'right',
  },
  buttonLink: {
    'text-decoration': 'none',
    color: 'white',
  },
}));

const LogInOutButton = () => {
  const classes = useStyles();
  const { isAuthenticated, user } = useSession();
  const firebase = useFirebase();

  if (isAuthenticated && user) {
    return (
      <Button
        className={classes.root}
        variant="contained"
        color="secondary"
        onClick={firebase.doLogout}
      >
        Sign Out
      </Button>
    )
  } else {
    return (
      <Button
        className={classes.root}
        variant="contained"
        color="secondary"
      >
        <Link to={LOGIN} className={classes.buttonLink}>Log in</Link>
      </Button>
    )
  }
};

export default LogInOutButton;

