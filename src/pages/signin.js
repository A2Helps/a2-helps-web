import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SignInForm from '../components/auth/SignInForm';
import Wrapper from '../components/wrapper';

const useStyles = makeStyles(theme => ({
  signIn: {
    padding: 16,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function SignInPage() {
  const classes = useStyles();

  return (
    <Wrapper>
      <Grid
        container
        justify='center'
      >
        <Grid item xs={12} sm={6} className={classes.signIn}>
          <SignInForm />
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default SignInPage;
