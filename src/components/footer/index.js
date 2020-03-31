import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {
  Link,
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
    backgroundColor: '#ffffff',
    padding: 40,
    marginTop: 40,
  },
  img: {
    width: '25px',
    marginTop: 20,
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
    },
    [theme.breakpoints.up('md')]: {
      width:'35px',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>

        <Grid
          container
          alignItems="center"
        >

          <Grid item xs={12} sm={9}>
            <Typography variant="body1" color="inherit">
              Made with <strong style={{color: "#F85A3E"}}>♥</strong> by volunteers in Ann Arbor, MI.
            </Typography>
          </Grid>

          <Grid
            item 
            container
            xs={12}
            sm={3}
            style={{maxWidth: '200px', margin: '0 auto'}}
          >
            <Grid item xs={3}>
              <Link to="/">
                <img className={classes.img} src="email-icon.svg" alt="Email Icon" />
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link to="/">
                <img className={classes.img} src="facebook-icon.svg" alt="Facebook Icon" />
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link to="/">
                <img className={classes.img} src="instagram-icon.svg" alt="Instagram Icon" />
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link to="/">
                <img className={classes.img} src="twitter-icon.svg" alt="Twitter Icon" />
              </Link>
            </Grid>
          </Grid>

        </Grid>

      </Container>
    </div>
  );
}