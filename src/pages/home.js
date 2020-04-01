import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Donate from '../components/donate';
import RequestCodes from '../components/request-codes';
import BusinessSignUp from '../components/business-sign-up';
import Mission from '../components/mission';
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
      <Mission />
      <Grid
        spacing={4}
        container
        className={styles.ctas}
      >
        <Donate />
        <RequestCodes />
        {/* <BusinessSignUp /> */}
      </Grid>
    </Wrapper>
  );
}

export default Home;
