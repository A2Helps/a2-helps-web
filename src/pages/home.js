import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Banner from '../components/banner';
import Donate from '../components/donate';
import RequestCodes from '../components/request-codes';
import BusinessSignUp from '../components/business-sign-up';
import Footer from '../components/footer';
import { LOGIN } from '../util/routes';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#efefef',
    display: 'flex',
    flexDirection: 'column',
  },
  ctas: {
    padding: 16,
    flexGrow: 1,
  },
  spacer: {
    flex: 1,
  },
}));

const LogIn = () => (
  <Link to={LOGIN}>Log in</Link>
);

function Home() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
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
        <LogIn />
      </Container>
      <div className={styles.spacer} />
      <Footer />
    </div>
  );
}

export default Home;
