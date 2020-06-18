import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Donation from '../models/donation';
import WrapperDonors from '../components/wrapper-donors';


const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  padding: {
  },
  title: {
    fontWeight: 300,
    marginTop: '70px',
    marginBottom: '40px',
    fontSize: '30px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '32px',
      marginBottom: '40px',
    },
  },
  person: {
    backgroundColor: '#F1A205',
    margin: '0 auto 15px auto',
    width: '100%',
    textAlign: 'center',
    color: 'white',
    padding: '20px 20px 20px 20px',
    boxShadow: '0 0 8px 0 rgba(0,0,0,0.20)',
    borderRadius: '3px',
    [theme.breakpoints.up('md')]: {
      padding: '35px 20px 35px 20px',
    },
  },
  name: {
    fontWeight: 600,
    fontSize: '32px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '50px',
    },
  }
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
    <WrapperDonors>
    <div className={styles.root}>
      <Container>
        <Typography variant="h3" color="inherit" className={styles.title}>
          Donors
        </Typography>
        <Grid
          container
          className={styles.padding}
        >
          {donors.map((donor) => (
            <div className={styles.person} key={donor.id}>
              <Typography className={styles.name}>{donor.public_name}</Typography>
            </div>
          ))}
        </Grid>
      </Container>
    </div>
    </WrapperDonors>
  );
}

export default Donors;
