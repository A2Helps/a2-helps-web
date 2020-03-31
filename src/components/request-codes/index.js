import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 30,
    marginTop: 12,
  }
}));

const openRequestForm = () => {
  window.open('https://forms.gle/46sQecMioRpCYyBh9');
}

export default function BusinessSignUp() {

  const classes = useStyles();

  return (
    <Grid item xs={12} md={4}>
      <Typography variant="h4" color="inherit">
        Become an A2 Helps Vendor
      </Typography>
      <Paper className={classes.root}>
        <Typography variant="h6" color="inherit">
          Sign up your local business
        </Typography>
        <Typography variant="body1" color="inherit">
          Are you a local business who can sell gift certificates to A2Helps?
        </Typography>
        <br />
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={openRequestForm}
        >
          Submit your business
        </Button>
      </Paper>
    </Grid>
  );
}


