import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Donation from '../models/donation';
import Wrapper from '../components/wrapper';
import Paper from '@material-ui/core/Paper';


export const useStyles = makeStyles(theme => ({
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
  person: {
    padding: 6,
    margin: 8,
  },
}));


function Donors() {
  const styles = useStyles();
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    if (donors.length) return;

    const makeRequest = async () => {
      const results = await Donation.get();
      if (results && results.length) {
        console.log(results);

        setDonors(results);
      }
    };
    makeRequest();
  });

  return (
    <Wrapper>
    <div className={styles.root}>
      <Container>
        <Grid
          spacing={2}
          container
          className={styles.padding}
        >
          {donors.map((donor) => (
            <Paper className={styles.person} key={donor.id}>
              <Typography>{donor.public_name}</Typography>
            </Paper>
          ))}
        </Grid>
      </Container>
    </div>
    </Wrapper>
  );
}

export default Donors;
