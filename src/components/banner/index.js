import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
  Link,
} from "react-router-dom";
import { HOME } from '../../util/routes';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    backgroundColor: '#719F20',
    borderBottom: '6px solid #7B6F68',
    color: 'white',
  },
  font: {
    padding: 32,
  },
  img: {
    width: '80%',
    paddingTop: 16,
    paddingBottom: 16,
  },
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          className={classes.center}
        >
          <Grid item xs={4} sm={2}>
            <Link to={HOME}>
              <img className={classes.img} src="logo_white_transparentBG.png" alt="A2Cares" />
            </Link>
          </Grid>
          <Grid item xs={12} sm={10} className={classes.font}>
            <Typography variant="h4" color="inherit">
              Support <strong>front-line workers</strong> and <strong>local businesses</strong> in Ann Arbor during the COVID-19 crisis.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
