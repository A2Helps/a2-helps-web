import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  imgDesktop: {
    display: 'none',
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
    marginTop: '40px',
    marginBottom: '70px',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      maxWidth: '1100px',
    },
  },
  imgMobile: {
    display: 'block',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    marginBottom: '50px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  howItWorks: {
    fontWeight: 300,
    marginTop: '80px',
    fontSize: '30px',
    textAlign: 'center',
    color: '#3D3B39',
    marginBottom: '20px',
    [theme.breakpoints.up('md')]: {
      fontSize: '32px',
    },
  },
  subtitle: {
    color: '#3D3B39',
    maxWidth: '325px',
    textAlign: 'center',
    margin: '0 auto',
    marginBottom: '20px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '30px',
      maxWidth: '460px',
    },
  },
  vidContainer: {
    width: '80%',
    height: '0',
    padding: '44% 0 0',
    display: 'block',
    position: 'relative',
    margin: '0 auto',
    [theme.breakpoints.up('video')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      height: '34px',
    },
  },
  vid: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    maxHeight: '100%',
    [theme.breakpoints.up('video')]: {
      margin: '0 auto',
      width: '670px',
    },
    [theme.breakpoints.up('md')]: {
      width: '770px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '800px',
    },
  },
}));

export default function HowItWorks() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Typography variant="h3" color="inherit" className={classes.howItWorks}>
        How It Works
      </Typography>
      <Typography variant="body1" color="inherit" className={classes.subtitle}>
      Donations to A2 Helps enable us to purchase gift cards from local restaurants and retail stores which are then distributed to healthcare professionals in our community.
      </Typography>
      <div className={classes.vidContainer}>
        <iframe className={classes.vid} src="https://drive.google.com/file/d/1k0jLfHPXWR85qMJ_4Sbk6XoXnUttlcmx/preview" width="640" height="480" title="How It Works"></iframe>
      </div>
    </div>
  );
}
