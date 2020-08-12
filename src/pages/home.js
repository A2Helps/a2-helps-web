import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Donate from '../components/donate';
import RequestCodes from '../components/request-codes';
import Mission from '../components/mission';
import Impact from '../components/impact';
import WrapperHome from '../components/wrapper-home';
import HowItWorks from '../components/how-it-works';
import Typography from '@material-ui/core/Typography';
import { DONATE } from '../util/routes';
import {
  Link,
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  ctas: {
    padding: 16,
    flexGrow: 1,
  },
  cta: {
    textAlign: 'center',
    fontWeight: 300,
    fontSize: '24px',
    color: '#3D3B39',
    margin: '0 auto',
    marginTop: '60px',
    marginBottom: '50px',
    maxWidth: '300px',
    [theme.breakpoints.up('md')]: {
      maxWidth: 'none',
    },
  },
  link: {
    color: '#719F20',
    fontWeight: 600,
  },
}));

function Home() {
  const styles = useStyles();
  return (
    <WrapperHome>
      <Impact />
      <Mission />

      {/* <Grid
        spacing={4}
        container
        className={styles.ctas}
      >
        <Donate />
        <RequestCodes />
        <BusinessSignUp />
      </Grid> */}
      <HowItWorks />
      {/* <Typography variant='body1' color='inherit' className={styles.cta}>
        Inspired by the heroes in our community? <Link to={DONATE} className={styles.link}>Donate now</Link>.
      </Typography> */}
    </WrapperHome>
  );
}

export default Home;
