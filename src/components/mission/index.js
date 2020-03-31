import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'left',
    color: 'black',
    minHeight: 300,
  },
}));

export default function Mission() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid
          container
          className={classes.center}
          alignItems='center'
        >
        <Typography>MISSION GOES HERE</Typography>
        </Grid>

    </div>
  );
}
