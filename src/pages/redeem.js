import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import Footer from '../components/footer';
import Merchant from '../models/merchant';
import { Businesses } from '../components/redeem/businesses';
import { Selections } from '../components/redeem/selections';

export const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#efefef',
    display: 'flex',
    flexDirection: 'column',
  },
  padding: {
    padding: 12,
    marginBottom: 12,
  },
  spacer: {
    flex: 1,
  },
  img: {
    width: 72,
  },
}));

const MAX_CREDITS = 6;

function Redeem() {
  const styles = useStyles();
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
    if (merchants.length) return;

    const makeRequest = async () => {
      const results = await Merchant.get();
      if (results && results.length) {
        setMerchants(results);
        console.log('merchants loaded');


      }
    };
    makeRequest();
  });
  console.log(merchants);


  const [credits, setCredits] = React.useState(MAX_CREDITS);
  const [allocation, setAllocation] = React.useState({});

  const incrementCredits = (key) => {
    const initialVal = (allocation[key] || 0);
    setAllocation({
      ...allocation,
      [key]: credits === 0 ? initialVal : (allocation[key] || 0) + 1,
    });
    setCredits(credits === 0 ? 0 : credits - 1)
  };

  const decrementCredits = (key) => {
    const initialVal = (allocation[key] || 0);
    const newAllocation = {
      ...allocation,
      [key]: initialVal ? initialVal - 1 : undefined,
    }

    if (!newAllocation[key]) delete newAllocation[key];
    setAllocation(newAllocation);
    setCredits(credits === MAX_CREDITS ? credits : credits + 1);
  };



  return (
    <div className={styles.root}>
      <Container>
        <Grid
          container
          className={styles.padding}
        >
          <Grid item xs={2}>
            <img className={styles.img} src="logo_fullColor_transparentBG.png" alt="A2Cares" />
          </Grid>
        </Grid>
        <Grid
          spacing={2}
          container
          className={styles.padding}
        >
          <Businesses
            businesses={merchants}
            decrementCredits={decrementCredits}
            incrementCredits={incrementCredits}
            allocation={allocation}
          />
          <Grid item xs={12} sm={3}>
            <Balance credits={credits} />
            <Selections
              businesses={merchants}
              allocation={allocation}
              decrementCredits={decrementCredits}
              incrementCredits={incrementCredits}
            />
          </Grid>
        </Grid>
        <Button>Next</Button>
      </Container>
      <div className={styles.spacer} />
      <Footer />
    </div>
  );
}

export default Redeem;

function Balance({ credits }) {
  const styles = useStyles();
  return <Paper className={styles.padding}>
    <Typography variant="h6" color="inherit">
      Your remaining balance is: <strong>${credits * 25}</strong>
    </Typography>
  </Paper>;
}


