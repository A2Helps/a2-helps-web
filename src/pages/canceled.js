import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {
  Link,
  useLocation,
} from "react-router-dom";
import Banner from '../components/banner';
import Footer from '../components/footer';
import { querystringToObj } from '../util';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#efefef',
  },
  message: {
    padding: 64,
    flexGrow: 1,
    textAlign: 'center',
  },
  spacer: {
    flex: 1,
  },
}));

function Success() {
  const styles = useStyles();
  const location = useLocation();
  const qs = querystringToObj(location.search);
  const { sessionid } = qs;

  console.log(sessionid);

  return (
    <div className={styles.root}>
      <Banner />
      <Container>
        <Grid
          spacing={2}
          container
          className={styles.message}
        >
          <Grid xs={12}>
            <br />
            <Typography variant="h4" color="inherit">
              Your payment has been canceled.
            </Typography>
            <br />
            <br />
            <Typography variant="h6" color="inherit">
              <Link to="/">Return home.</Link>
            </Typography>
          </Grid>
        </Grid>
        <div className={styles.spacer} />
        <Footer />
      </Container>
    </div>
  );
}

export default Success;
