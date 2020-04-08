import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import verifyCode from '../models/verify-code';
import {
  useHistory,
} from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/auth';
import * as ROUTES from '../util/routes';
import Footer from '../components/footer';

import {
  useParams
} from "react-router-dom";
import { InputPhone } from '../components/validate-code/input-phone';
import { VerifyAccount } from '../components/validate-code/verify-account';
import { validatePhone } from '../components/validate-code/validate-phone';

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
  messageLoading: {
    padding: 24,
    flexGrow: 1,
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    opacity: 0.5,
    pointerEvents: 'none',
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

const ERRORS = {
  'veryify.recipient.exists': 'This phone number is already being used.',
  'verify.code.claimed': 'This code has already been claimed.',
};

const Phone = () => {
  const styles = useStyles();
  const history = useHistory();
  const ref = useRef(null);
  const { code } = useParams();

  const [errorMessage, setErrorMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [codeSent, setCodeSent] = useState(false);

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

  const submitPhoneNumber = async () => {
    if (!validNumber) {
      setErrorMessage('The phone number you provided was invalid. It must follow the format 555-555-5555');
      setOpen(true);
      return;
    }
    const appVerifier = window.recaptchaVerifier;
    setLoading(true);

    try {
      await verifyCode({
        code,
        phone: phone.match(/[0-9]/g).join('').slice(1),
        onError: (response) => {
          setErrorMessage(ERRORS[response.data.error.code] || '');
          setOpen(true);
        }
      });
    } catch(e) {
      console.log(e);
      setLoading(false);
      return;
    }

    window.confirmationResult = await firebase
      .auth()
      .signInWithPhoneNumber(phone, appVerifier);

    setCodeSent(true);
    setLoading(false);
  }

  const tryVerify = (textedCode) => {
    setLoading(true);
    window.confirmationResult.confirm(textedCode).then(function (result) {
      // User signed in successfully.
      const user = result.user;
      setLoading(false);
      history.push(ROUTES.REDEEM, { user });
    }).catch(function (error) {
      setLoading(false);
      console.log({
        message: 'User couldnt sign in',
        error,
      });
    });
  }

  const handleClose = () => setOpen(false);

  return (
    <div className={styles.root}>
      <Container>
        <Grid
          spacing={2}
          container
          className={loading ? styles.messageLoading : styles.message}
        >
          <Grid item xs={12}>
            <img className={styles.img} src="logo_fullColor_transparentBG.png" alt="A2Cares" />
          </Grid>
          {codeSent ? (
            <VerifyAccount
              tryVerify={tryVerify}
            />
          ) : (
            <InputPhone
              setPhone={setPhone}
              buttonRef={ref}
              onClick={submitPhoneNumber}
            />
          )}
        </Grid>
      </Container>
      <div className={styles.spacer} />
      <Footer />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" severity="warning">
          {errorMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default React.memo(Phone);
