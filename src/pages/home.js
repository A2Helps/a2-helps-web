import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '../components/header';
import Banner from '../components/banner';
import Donate from '../components/donate';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundColor: '#efefef',
  },
  ctas: {
    padding: 16,
    flexGrow: 1,
  },
}));

function Home() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <AppBar />
      <Banner />
      <Grid
        container
        className={styles.ctas}
      >
        <Donate />
      </Grid>
    </div>
  );
}

export default Home;
