import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import Merchant from '../models/merchant';
import { Businesses } from '../components/redeem/businesses';
import { Selections } from '../components/redeem/selections';
import Wrapper from '../components/wrapper';


export const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#FBFBFB',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 1px 2px #ddd'
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

const MAX_AMOUNT = 100;

function Redeem() {
  const styles = useStyles();
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
    if (merchants.length) return;

    const makeRequest = async () => {
      const results = await Merchant.get();
      if (results && results.length) {
        setMerchants(results);
        console.log(results);


      }
    };
    makeRequest();
  });

  const [amount, setAmount] = React.useState(MAX_AMOUNT);
  const [allocation, setAllocation] = React.useState({});

  const incrementCredits = (key, amountChange) => {
    const initialVal = (allocation[key] || 0);
    setAllocation({
      ...allocation,
      [key]: amount === 0 ? initialVal : (allocation[key] || 0) + amountChange,
    });
    setAmount(amount === 0 ? 0 : amount - amountChange)
  };

  const decrementCredits = (key, amountChange) => {
    const initialVal = (allocation[key] || 0);
    const newAllocation = {
      ...allocation,
      [key]: initialVal ? initialVal - amountChange : undefined,
    }

    if (!newAllocation[key]) delete newAllocation[key];
    setAllocation(newAllocation);
    setAmount(amount === MAX_AMOUNT ? amount : amount + amountChange);
  };


  return (
    <Wrapper>
    <div className={styles.root}>
      <Container>
        <br />
        <Typography variant="h5">
          Choose your gift cards
        </Typography>
        <br />
        <Typography variant="body1">
          You are the recipient of $100 in giftcards from A2 Helps! Select the businesses from which you would like to redeem cards and add them to your cart. You will receive an electronic code for each of the businesses you've selected once you checkout. Thank you for your service on the front lines of COVID19.
        </Typography>
        <br />
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
            <Balance amount={amount} />
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
    </div>
    </Wrapper>
  );
}

export default Redeem;

function Balance({ amount }) {
  const styles = useStyles();
  return <Paper className={styles.padding}>
    <Typography variant="h6" color="inherit">
      Your remaining balance is: <strong>${amount}</strong>
    </Typography>
  </Paper>;
}


