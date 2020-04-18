import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    backgroundColor: '#719F20',
    color: 'white',
    minHeight: 140,
    paddingTop: '60px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '12px',
      minHeight: 170,
    },
    [theme.breakpoints.up('md')]: {
      minHeight: 250,
      fontSize: '12px',
      paddingTop: '120px',
    },
  },
  h1: {
    maxWidth: 555,
    fontSize: '26px',
    paddingTop: '10px',
    fontWeight: '400',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      fontSize: '38px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '46px',
      maxWidth: 750,
    },
  },
  h2: {
    maxWidth: 595,
    fontSize: '20px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '28px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '32px',
    },
  },
  fbLive: {
    fontSize: '20px',
    marginBottom: '20px',
    marginTop: '-20px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '28px',
      marginBottom: '30px',
      marginTop: '-30px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '32px',
      marginBottom: '40px',
    },
  },
}));

const launchDate = new Date('April 6, 2020 12:00:00');
const fmtTimeString = (time) => {
  const fmt = new Date(time).toISOString().slice(11, -5);
  const parts = fmt.split(':');

  if (time < 6e4) { // less than 1 minute remaining
    return `${parts[2]}`;
  }
  if (time < 3.6e6) { // less than 1hr remaining
    return `${Number(parts[1])}:${parts[2]}`;
  }
  if (time < 8.64e7) { // less than 1 day remaining
    return `${Number(parts[0])}:${parts[1]}:${parts[2]}`;
  }

  return `${time / 8.64e7 | 0} days, ${parts[0]}:${parts[1]}:${parts[2]}`;
};

const fbLiveEvents = [
  { start: new Date('April 6, 2020 12:00:00'), end: new Date('April 6, 2020 13:00:00') },
  { start: new Date('April 6, 2020 14:00:00'), end: new Date('April 6, 2020 15:00:00') },
  { start: new Date('April 6, 2020 16:00:00'), end: new Date('April 6, 2020 18:00:00') },
];

const isFBLive = (time) => {
  return fbLiveEvents.some((event) => {
    return (time > event.start && time < event.end);
  });
}

export default function DonorsHero() {
  const classes = useStyles();
  const currentTime = Date.now();
  const [time, setTime] = useState(launchDate - currentTime);
  const [fmtTime, setFmtTime] = useState(fmtTimeString(time));
  const [fbLive, setFBLive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time - 1000);
      setFmtTime(fmtTimeString(time));
    }, 1000);
    return () => clearInterval(interval);
  }, [time, fmtTime]);

  useEffect(() => {
    setFBLive(isFBLive(currentTime));
  }, [currentTime]);

  return (
    <div className={classes.root}>
        <Grid
          container
          className={classes.center}
          alignItems='center'
        >
        <Container>
          <Grid item xs={12} className={classes.font}>
            <Typography variant="h1" color="inherit" className={classes.h1}>
            A2 Helps is made possible by our generous donors.
            </Typography>
          </Grid>
          </Container>
        </Grid>
    </div>
  );
}
