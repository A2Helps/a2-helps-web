import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
    marginTop: '70px',
    marginBottom: '40px',
    fontSize: '30px',
    textAlign: 'center',
    color: '#3D3B39',
    [theme.breakpoints.up('md')]: {
      fontSize: '32px',
      marginBottom: '60px',
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
      <img className={classes.imgDesktop} src={"diagramDesktop.png"} alt="A2Cares" />
      <img className={classes.imgMobile} src={"diagramMobile.png"} alt="A2Cares" />
    </div>
  );
}
