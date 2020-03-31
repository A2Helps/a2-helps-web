import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {
  Link,
} from "react-router-dom";
import { HOME } from '../util/routes';
import Banner from '../components/banner';
import Footer from '../components/footer';

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

function Success() {
  const styles = useStyles();
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
              <strong>Thank you</strong> for supporting local front-liners and businesses.
            </Typography>
            <br />
            <br />
            <Typography variant="h6" color="inherit">
              Your donation has been received.
              <br />
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
