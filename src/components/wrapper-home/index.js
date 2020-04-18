import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Banner from '../banner';
import HomeHero from '../home-hero';
import Footer from '../footer';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
  },
  spacer: {
    flex: 1,
  },
}));

function WrapperHome(props) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Banner />
      <HomeHero />
      <Container>
        {props.children}
      </Container>
      <div className={styles.spacer} />
      <Footer />
    </div>
  );
}

export default WrapperHome;
