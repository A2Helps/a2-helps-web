import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { CODE_EMPTY } from '../util/routes';

import Wrapper from '../components/wrapper';


export const useStyles = makeStyles(() => ({
  root: {
    minHeight: '80vh',
    backgroundColor: '#FBFBFB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: '0px 1px 2px #ddd',
    textAlign: 'center',
  },
  padding: {
    padding: 12,
    marginBottom: 12,
  },
  spacer: {
    flex: 1,
  },
  img: {
    width: 72,
  },
}));

function Order() {
  const styles = useStyles();
  const history = useHistory();
  useEffect(() => {
    if (!firebase.auth().currentUser) {
      history.push(CODE_EMPTY + '/' + localStorage.getItem('code'));
      return;
    }
  });

  return (
    <Wrapper>
    <div className={styles.root}>
      <Container>
        <br />
        <Typography variant="h5">
        Thank you for your selections! Look out for an email from us soon with more information on how to redeem your cards.
        </Typography>
        <br />
      </Container>
    </div>
    </Wrapper>
  );
}

export default Order;
