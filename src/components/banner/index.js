import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import {
  Link,
} from "react-router-dom";
import { HOME } from '../../util/routes';
import Navigation from '../Navigation';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'left',
    backgroundColor: '#fff',
    color: 'white',
  },
  font: {
    padding: 32,
  },
  img: {
    width: '50%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  center: {
    justifyContent: 'space-between',
  },
  donate: {
    textAlign: 'right',
  },
  clearUnderline: {
    textDecoration: 'none',
  },
  alertBanner: {
    backgroundColor: '#3D501C',
    width: '100%',
    textAlign: 'center',
    padding: '20px 20px',
  },
  lineOne: {
    fontWeight: 700,
    fontSize: '16px',
  },
  lineTwo: {
    fontSize: '14px',
  },
  lineThree: {
    fontSize: '14px',
    opacity: '70%',
  },
  a: {
    color: 'white',
  }
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{boxShadow: '0px 1px 8px 0px rgba(0,0,0,0.25)', zIndex: 10}}>
      <Container>
        <Grid
          container
          className={classes.center}
          alignItems='center'
        >
          <Grid item xs={4} sm={2}>
            <Link to={HOME}>
              <img className={classes.img} src="logo_fullColor_transparentBG.png" alt="A2Cares" />
            </Link>
          </Grid>
          <Navigation />
        </Grid>
      </Container>
      <Grid
          container
          className={classes.alertBanner}
          alignItems='center'
        >
          <Grid item xs={12}>
            <Typography variant="body1" color="inherit" className={classes.lineOne}>
            Mission accomplished!
            </Typography>
            <Typography variant="body1" color="inherit" className={classes.lineTwo}>
            Our site will remain online to celebrate the work we've accomplished (all made possible by our generous donors) and to share community resources.
            </Typography>
          </Grid>
        </Grid>
    </div>
  );
}
