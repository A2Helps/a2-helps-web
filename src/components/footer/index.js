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
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
    backgroundColor: '#ffffff',
    padding: 40,
    marginTop: 40,
  },
  container: {
    paddingLeft: '0px',
    paddingRight: '0px',
  },
  img: {
    width: '30px',
    marginTop: 20,
    
    [theme.breakpoints.up('md')]: {
      width:'35px',
      marginTop: 0,
    },
  },
  socialLinks: {
    maxWidth: '250px',
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      margin: '0',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>

        <Grid
          container
          alignItems='center'
          justify='space-between'
        >

          <Grid item xs={12} md={9}>
            <Typography variant="body1" color="inherit">
              Made with <strong style={{color: "#F85A3E"}}>♥</strong> by volunteers in Ann Arbor, MI.
            </Typography>
          </Grid>

          <Grid
            item 
            container
            xs={12}
            md={3}
            justify='space-between'
            className={classes.socialLinks}
          >
            <Grid item xs={2}>
              <a href="mailto:help@a2helps.com" target="_top">
                <img className={classes.img} src="email-icon.svg" alt="Email Icon" />
              </a>
            </Grid>
            <Grid item xs={2}>
              <a target="_blank" href="https://www.instagram.com/a2helps/">
                <img className={classes.img} src="instagram-icon.svg" alt="Instagram Icon" />
              </a>
            </Grid>
            <Grid item xs={2}>
              <a target="_blank" href="https://twitter.com/a2helps">
                <img className={classes.img} src="twitter-icon.svg" alt="Twitter Icon" />
              </a>
            </Grid>
            <Grid item xs={2}>
              <a target="_blank" href="https://www.facebook.com/a2helps">
                <img className={classes.img} src="facebook-icon.svg" alt="Facebook Icon" />
              </a>
            </Grid>
            <Grid item xs={2}>
              <a target="_blank" href="https://www.linkedin.com/company/a2-helps/">
                <img className={classes.img} href="https://www.linkedin.com/company/a2-helps/" src="linkedin-icon.svg" alt="Linkedin Icon" />
              </a>
            </Grid>
          </Grid>

        </Grid>

      </Container>
    </div>
  );
}