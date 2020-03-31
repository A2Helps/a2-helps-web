import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import firebase from 'firebase/app';
import 'firebase/auth';

import Footer from '../components/footer';

import {
  useParams
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#efefef',
    display: 'flex',
    flexDirection: 'column',
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
}));

const validatePhone = (input) => {
  const reg = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  return input.match(reg);
}

const cleanPhone = (input) => {
  const cleaned = ('' + input).replace(/\D/g, '')
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    const intlCode = (match[1] ? '+1' : '+1')
    return [intlCode, match[2], '-', match[3], '-', match[4]].join('')
  }
  return input.replace(/[^0-9\.]+/g, '');
}

const Phone = () => {
  const styles = useStyles();
  const [phone, setPhone] = useState('');
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { code } = useParams();
  const validNumber = validatePhone(phone);

  useEffect(() => {
    if (!ref.current) return;
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(ref.current, {
      'size': 'invisible',
      'expired-callback': function () {
        console.log('expired');
      }
    });
  });

  const onClick = () => {
    if (!validNumber) {
      setOpen(true);
      console.log('not valid');

      return;
    }
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phone, appVerifier)
      .then(confirmResult => {
        // success
        console.log({ confirmResult });

      })
      .catch(error => {
        console.log({ error });
        // error
      });
  }

  const handleClose = () => setOpen(false);

  return (
    <div className={styles.root}>
      <Container>
        <Grid
          spacing={2}
          container
          className={styles.message}
        >
          <Grid item xs={12}>
            <img className={styles.img} src="logo_fullColor_transparentBG.png" alt="A2Cares" />
          </Grid>
          <Grid item xs={12}>
            <br />
            <Typography variant="h4" color="inherit">
              Enter Phone #
            </Typography>
            <br />
            <br />
            <Typography variant="h6" color="inherit">
              We will text you a verification code.
            </Typography>
            <br />
            <br />
            <TextField
              placeholder="Phone #"
              value={phone}
              onChange={(event) => setPhone(cleanPhone(event.target.value))}
            />&nbsp;
            <Button ref={ref} onClick={onClick}>Next</Button>
          </Grid>
        </Grid>
      </Container>
      <div className={styles.spacer} />
      <Footer />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" severity="warning">
          The phone number you provided was invalid. It must follow the format 555-555-5555
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default React.memo(Phone);
