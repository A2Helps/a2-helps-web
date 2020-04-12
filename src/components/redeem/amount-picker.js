import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  amount: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 6,
    border: `1px solid ${theme.palette.grey[500]}`,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 3,
  },
  picker: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    cursor: 'pointer',
  },
}));

export const AmountPicker = ({
  decrementCredits,
  business,
  allocation,
  incrementCredits,
}) => {
  const styles = useStyles();
  return <div className={styles.picker}>
    <ChevronLeft onClick={(event) => {
      event.stopPropagation();
      decrementCredits(business.id);
    }} />
    <Typography className={styles.amount}>${(allocation[business.id] || 0) * 25}</Typography>
    <Button>
      Add&nbsp;
      {business.amounts[0]}
    </Button>
    <ChevronRight onClick={(event) => {
      event.stopPropagation();
      incrementCredits(business.id);
    }} />
  </div>;
};
