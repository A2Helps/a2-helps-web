import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import { AmountPicker } from './amount-picker';

export const useStyles = makeStyles(() => ({
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  picker: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
  },
}));


export const Businesses = ({
  businesses,
  decrementCredits,
  incrementCredits,
  allocation,
}) => {
  const styles = useStyles();

  return (
    <Grid
      item
      xs={12}
      sm={9}
    >
      <Grid
        container
        spacing={2}
      >
        {businesses.map((business) => {
          if (!business.active) return null;
          if (!(business.amounts || []).length) return null;

          return (<Grid item sm={6} xs={12} key={business.id}>
            <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={business.name}
                height="140"
                image={business.img_url || 'shop.png'}
                title="Contemplative Reptile"
                />
              </CardActionArea>
              <CardContent>
                <Typography className={styles.heading}>{business.name}</Typography>
                <br />
                <AmountPicker
                  decrementCredits={decrementCredits}
                  incrementCredits={incrementCredits}
                  business={business}
                  allocation={allocation}
                />
              </CardContent>
            </Card>
          </Grid>);
        })}
      </Grid>
    </Grid>
  );
};
