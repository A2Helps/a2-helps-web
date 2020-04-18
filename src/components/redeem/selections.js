import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { AmountPicker } from './amount-picker';

export const useStyles = makeStyles(() => ({
  padding: {
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

export function Selections({
  businesses,
  allocation,
  decrementCredits,
  incrementCredits,
}) {
  const styles = useStyles();
  const allocationList = Object.keys(allocation);
  if (!allocationList.length)
    return null;
  return (<div>
    <hr />
    <br />
    <Typography variant="h6" color="inherit">
      Your Selections
    </Typography>
    {allocationList
      .map((id) => businesses
        .find((b) => b.id === id))
      .map((business) => {
        return (<Paper className={styles.padding}>
          <Typography variant="body1" color="inherit">
            <strong>{business.name}</strong>
          </Typography>
          <AmountPicker
            decrementCredits={decrementCredits}
            incrementCredits={incrementCredits}
            business={business}
            allocation={allocation}
          />
        </Paper>);
      })}
  </div>);
}
