import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SignInForm from '../components/auth/SignInForm';
import Wrapper from '../components/wrapper';

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
    <Wrapper>
      <Grid item xs>
        <Paper className={classes.paper}>
          <Typography variant="h1" color="inherit">
            Sign In
          </Typography>
          <SignInForm />
        </Paper>
      </Grid>
    </Wrapper>
  );
}

export default SignInPage;
