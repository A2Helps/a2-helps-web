import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 16,
    marginTop: 12,
  }
}));

const openRequestForm = () => {
  window.open('https://forms.gle/46sQecMioRpCYyBh9');
}

export default function RequestCodes() {

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4}>
      <Typography variant="h4" color="inherit">
        Accept Gratitude
      </Typography>
      <Paper className={classes.root}>
        <Typography variant="h6" color="inherit">
          Request Codes for your Team
        </Typography>
        <Typography variant="body1" color="inherit">
          Do you lead a team of COVID-19 front-liners? Submit your information to see if your team is eligible to recieve A2Helps codes.
        </Typography>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={openRequestForm}
        >
          Request Codes
        </Button>
      </Paper>
    </Grid>
  );
}


