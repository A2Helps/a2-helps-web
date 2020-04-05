import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Donate from '../components/donate';
import Wrapper from '../components/wrapper';
import Typography from '@material-ui/core/Typography';
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
  body: {
    textAlign: 'center',
    color: '#3D3B39',
    maxWidth: '600px',
    margin: '60px auto 0 auto',
    fontSize: '20px',
    fontWeight: 600,
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
    },
  },
}));

function Confirm() {
  const styles = useStyles();

  return (
    <Wrapper>
    <div className={styles.root}>
          <Typography variant="body1" color="inherit" className={styles.body}>
          Your donation will provide direct support to local businesses in Washtenaw Country and workers on the front lines of the CoVID-19 crisis.
          </Typography>
      <Container className={styles.donateBox}>
          <Donate className={styles.donate}/>
      </Container>
      <div className={styles.spacer} />
    </div>
    </Wrapper>
  );
}

export default Confirm;
