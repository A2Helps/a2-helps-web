import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Footer from '../components/footer';
import Paper from '@material-ui/core/Paper';

import { STUB_BUSINESSES } from '../components/redeem/data';
import { Businesses } from '../components/redeem/businesses';

export const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
  },
  padding: {
    padding: 12,
  },
  spacer: {
    flex: 1,
  },
  img: {
    width: 72,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  secondaryHeading: {
    fontSize: 18,
    paddingLeft: 12,
  },
  summary: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
  },
  checkbox: {
    padding: 1,
    paddingRight: 6,
  },
}));


function Phone() {
  const styles = useStyles();
  const businesses = [...STUB_BUSINESSES];

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
          <Grid item xs={12} sm={3}>
            <Paper className={styles.padding}>
              <Typography variant="h6" color="inherit">
                Your remaining balance is: <strong>$150</strong>
              </Typography>
            </Paper>
          </Grid>
          <Businesses businesses={businesses} />
        </Grid>
        <Button>Next</Button>
      </Container>
      <div className={styles.spacer} />
      <Footer />
    </div>
  );
}

export default Phone;
