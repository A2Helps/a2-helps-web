import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'left',
    backgroundColor: '#719F20',
    color: 'white',
  },
  font: {
    padding: 32,
  },
  img: {
    width: '80%',
    paddingTop: 16,
    paddingBottom: 16,
  },
}));

export default function HomeHero() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          className={classes.center}
        >
          <Grid item xs={12} sm={10} className={classes.font}>
            <Typography variant="h3" color="inherit">
              You're here for us. We're here for you.
            </Typography>
            <Typography variant="h4" color="inherit">
              Supporting <strong>front-line workers</strong> and <strong>local businesses</strong> in Ann Arbor during the COVID-19 crisis.
            </Typography>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}
