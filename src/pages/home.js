import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Donate from '../components/donate';
import RequestCodes from '../components/request-codes';
import BusinessSignUp from '../components/business-sign-up';
import HomeHero from '../components/home-hero';
import Wrapper from '../components/wrapper';


const useStyles = makeStyles(theme => ({
  ctas: {
    padding: 16,
    flexGrow: 1,
  },
}));

function Home() {
  const styles = useStyles();
  return (
    <Wrapper>
      <Grid
        spacing={2}
        container
        className={styles.ctas}
      >
        <Donate />
        <RequestCodes />
        <BusinessSignUp />
      </Grid>
    </Wrapper>
  );
}

export default Home;
