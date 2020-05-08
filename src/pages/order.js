import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { CODE_EMPTY } from '../util/routes';

import Wrapper from '../components/wrapper';


export const useStyles = makeStyles(() => ({
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
          We have received your selections. You'll hear from us soon with more information!
        </Typography>
        <br />
      </Container>
    </div>
    </Wrapper>
  );
}

export default Order;
