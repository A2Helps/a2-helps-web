import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from '../components/header';
import Banner from '../components/banner';
import Donate from '../components/donate';
import RequestCodes from '../components/request-codes';
import BusinessSignUp from '../components/business-sign-up';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundColor: '#efefef',
  },
  ctas: {
    padding: 16,
    flexGrow: 1,
  },
}));

function Home() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <AppBar />
      <Banner />
      <Container>
        <Grid
          spacing={2}
          container
          className={styles.ctas}
        >
          <Donate />
          <RequestCodes />
          <BusinessSignUp />
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
