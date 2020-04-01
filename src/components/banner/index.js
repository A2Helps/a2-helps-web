import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {
  Link,
} from "react-router-dom";
import { HOME, DONATE } from '../../util/routes';
// import LogInOutButton from '../auth/LogInOutButton';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'left',
    backgroundColor: '#fff',
    color: 'white',
  },
  font: {
    padding: 32,
  },
  img: {
    width: '60%',
    paddingTop: 20,
    paddingBottom: 20,
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
    <div className={classes.root} style={{boxShadow: '0px 1px 8px 0px rgba(0,0,0,0.3)', zIndex: 10}}>
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
          <Grid item xs className={classes.donate}>
            <Link to={DONATE} className={classes.clearUnderline}>
              <Button
                variant="contained"
                color="secondary"
              >
                Donate
              </Button>
            </Link>
            {/* <LogInOutButton /> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
