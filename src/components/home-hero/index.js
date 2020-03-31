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
    minHeight: 300,
    [theme.breakpoints.up('sm')]: {
      fontSize: '12px',
      minHeight: 450,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '12px',
    },
  },
  h1: {
    maxWidth: 595,
    fontSize: '26px',
    paddingTop: '10px',
    fontWeight: '400',
    [theme.breakpoints.up('sm')]: {
      fontSize: '38px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '46px',
      maxWidth: 665,
    },
  },
  h2: {
    maxWidth: 595,
    fontSize: '20px',
    paddingTop: '40px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '28px',
      paddingTop: '130px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '32px',
      paddingTop: '120px',
    },
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
        <Grid
          container
          className={classes.center}
          alignItems='center'
        >
        <Container>
          <Grid item xs={12} className={classes.font}>
            <Typography variant="h2" color="inherit" className={classes.h2}>
              You're here for us. We're here for you.
            </Typography>
            <Typography variant="h1" color="inherit" className={classes.h1}>
              Supporting <strong>front-line workers</strong> and <strong>local businesses</strong> in Ann Arbor during the COVID-19 crisis.
            </Typography>
          </Grid>
          </Container>

        </Grid>

    </div>
  );
}
