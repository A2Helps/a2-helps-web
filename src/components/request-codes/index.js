import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 30,
    marginTop: 12,
    boxShadow: '0px 0px 7px 1px rgba(0,0,0,0.13)',
    color: '#3D3B39',
    minHeight: '300px',
    [theme.breakpoints.up('sm')]: {
      
    },
    [theme.breakpoints.up('md')]: {
      
    },
  },
  title: {
    color: '#3D3B39', 
    textAlign: 'center',
    paddingBottom: '5px',
    marginTop: '20px',
    fontSize: '20px',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '10px',
      marginTop: '60px',
      paddingBottom: '5px',
      fontSize: '32px',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: '10px',
      marginTop: '60px',
      paddingBottom: '5px',
    },  
  },
}));

const openRequestForm = () => {
  window.open('https://forms.gle/46sQecMioRpCYyBh9');
}

export default function BusinessSignUp() {

  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <Typography variant="h3" color="inherit" className={classes.title}>
        Become an A2 Helps Vendor
      </Typography>
      <Paper className={classes.root}>
        <Typography variant="h4" color="inherit">
          Sign up your local business
        </Typography>
        <Typography variant="body1" color="inherit">
          Are you a local business who can sell gift certificates to A2Helps?
        </Typography>
        <br />
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={openRequestForm}
        >
          Submit your business
        </Button>
      </Paper>
    </Grid>
  );
}


