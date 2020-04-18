import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
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
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{boxShadow: '0px 1px 8px 0px rgba(0,0,0,0.15)', zIndex: 10}}>
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
    </div>
  );
}
