import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    backgroundColor: '#e6f7cf',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 250
  }
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.center}
      >
        <Grid item xs={6}>
          <Typography variant="h6" color="inherit">
          Support front-line workers and local businesses in Ann Arbor during the COVID-19 crisis.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
