import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 40,
    boxShadow: '0px 0px 7px 1px rgba(0,0,0,0.13)',
    color: '#3D3B39',
    minHeight: '180px',
    maxWidth: '580px',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      
    },
    [theme.breakpoints.up('md')]: {
      minHeight: '390px',
    },
  },
  title: {
    color: '#3D3B39',
    textAlign: 'center',
    paddingBottom: '10px',
    marginTop: '20px',
    fontSize: '30px',
    fontWeight: 300,
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '25px',
      marginTop: '60px',
      fontSize: '32px',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: '20px',
      marginTop: '60px',
    },
  },
    h4: {
      fontSize: '28px',
      fontWeight: 600,
      marginBottom: '10px',
    },
    body: {
      marginBottom: '30px', 
    },
    button: {
      width: '100%',
      marginTop: '0px',
      [theme.breakpoints.up('md')]: {
        marginTop: '220px',
      },
    },
}));

const openRequestForm = () => {
  window.open('https://forms.gle/46sQecMioRpCYyBh9');
}

export default function BusinessSignUp() {

  const classes = useStyles();

  return (
    <Grid item xs={12} lg={6}>
      <Typography variant="h3" color="inherit" className={classes.title}>
        Join the A2 Helps network!
      </Typography>
      <Paper className={classes.root}>
        <Typography variant="h4" color="inherit" className={classes.h4}>
          Sign Up
        </Typography>
        <Typography variant="body1" color="inherit" className={classes.body}>
          Are you a business in washtenaw county who can sell gift certificates through A2Helps? Sign up to receive our support. 
        </Typography>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={openRequestForm}
          className={classes.button}
        >
          Join the A2 Helps Family
        </Button>
      </Paper>
    </Grid>
  );
}


