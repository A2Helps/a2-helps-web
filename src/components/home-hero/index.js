import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'left',
    backgroundColor: '#719F20',
    color: 'white',
    minHeight: 220,
    paddingTop: '40px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '12px',
      minHeight: 240,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '12px',
      paddingTop: '120px',
    },
  },
  countdown: {
    textAlign: 'left',
    fontSize: '20px',
    fontWeight: '400',
    marginTop: '12px',
    paddingBottom: '40px',
    marginBottom: '-30px',
    opacity: '.7',
    [theme.breakpoints.up('sm')]: {
      marginTop: '-20px',
      fontSize: '20px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20px',
    },
  },
  finalCountdown: {
    fontSize: '64px',
    fontWeight: '700',
    [theme.breakpoints.up('sm')]: {
      fontSize: '96px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '128px',
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

export default function HomeHero() {
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
            {fbLive &&
              <Typography variant="h2" className={classes.fbLive}>We're live on facebook: <a href="https://www.facebook.com/a2helps/live" target="_blank" rel="noopener noreferrer">facebook.com/a2helps/live</a></Typography>
            }
            {(time <= 0)
              ? '' // Hide countdown once we launch
              : ((time > 6e5) // less than 10 minutes remaining
                  ? <Typography variant="h1" className={classes.countdown}>Launching in: <strong>{fmtTime}</strong></Typography>
                  : <Typography variant="h1" className={`${classes.countdown} ${classes.finalCountdown}`}>{fmtTime}</Typography>
                )
            }
            <Typography variant="h2" color="inherit" className={classes.h2}>
              To all healthcare workers
            </Typography>
            <Typography variant="h1" color="inherit" className={classes.h1}>
              <strong>Thank you</strong> for all that you do.
            </Typography>
          </Grid>
          </Container>
        </Grid>
    </div>
  );
}
