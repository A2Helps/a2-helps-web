import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SignInForm from '../components/auth/SignInForm';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function SignInPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
      >
        <Grid item xs>
          <Paper className={classes.paper}>
            <Typography variant="h1" color="inherit">
              Sign In
            </Typography>
            <SignInForm />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignInPage;
