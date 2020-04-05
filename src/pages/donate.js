import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Donate from '../components/donate';
import Wrapper from '../components/wrapper';
import Footer from '../components/footer';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '-130px',
  },
  message: {
    padding: 24,
    flexGrow: 1,
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  spacer: {
    flex: 1,
  },
  img: {
    width: '50%',
    maxWidth: '240px',
    minWidth: '62px',
  },
  donateBox: {
    marginLeft: '0px',
    marginTop: '20px',
    [theme.breakpoints.up('lg')]: {
      marginLeft: '290px',
      marginTop: '0px',
    },
  },
  donate: {
  },
}));

function Confirm() {
  const styles = useStyles();

  return (
    <Wrapper>
    <div className={styles.root}>
      <Container className={styles.donateBox}>
          <Donate className={styles.donate}/>
      </Container>
      <div className={styles.spacer} />
    </div>
    </Wrapper>
  );
}

export default Confirm;
