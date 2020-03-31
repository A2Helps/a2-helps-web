import React, { useEffect } from 'react';
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
import Donation from '../models/donation';
import { HOME } from '../util/routes';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
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

const cancelDonation = async (donationId) => {
  const donation = new Donation({ id: donationId });
  await donation.cancel();
};

function Success() {
  const styles = useStyles();
  const location = useLocation();
  const qs = querystringToObj(location.search);
  const { donationid } = qs;

  useEffect(() => {
    if (donationid) {
      cancelDonation(donationid);
    }
  });

  return (
    <div className={styles.root}>
      <Banner />
      <Container>
        <Grid
          spacing={2}
          container
          className={styles.message}
        >
          <Grid item xs={12}>
            <br />
            <Typography variant="h4" color="inherit">
              Your payment has been canceled.
            </Typography>
            <br />
            <br />
            <Typography variant="h6" color="inherit">
              <Link to={HOME}>Return home.</Link>
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
