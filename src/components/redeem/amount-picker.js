import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  amount: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 6,
    border: `1px solid ${theme.palette.grey[500]}`,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4,
  },
  picker: {
    flexWrap: 'wrap',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    width: '100%',
  },
}));

export const AmountPicker = ({
  decrementCredits,
  business,
  allocation,
  incrementCredits,
}) => {
  const amount = business.amounts.sort().reverse()[0]
  const styles = useStyles();
  return <div className={styles.picker}>
    <Button
      variant="contained"
      color="primary"
      disabled={!allocation[business.id]}
      onClick={() => {
        decrementCredits(business.id, amount);
      }}
    >
      -&nbsp;$
      {amount}
    </Button>&nbsp;
    <Typography className={styles.amount}>${(allocation[business.id] || 0)}</Typography>&nbsp;
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        incrementCredits(business.id, amount);
      }}
    >
      +&nbsp;$
      {amount}
    </Button>
  </div>;
};
