import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import MuiAlert from '@material-ui/lab/Alert';
import MuiPhoneNumber from 'material-ui-phone-number';
import {
  useHistory,
} from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/auth';

import * as ROUTES from '../util/routes';
// code does not exist
// code exists but phone # already exists
// code exists and unclaimed and you're good to go

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

const validatePhone = (input) => {
  if (!input) return false;
  const clean = cleanPhone(input);
  return clean.match(/\d/g).length === 11;
}

// dont allow other country codes
const cleanPhone = (input) => {
  const cleaned = ('' + input).replace(/\D/g, '')
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return [match[1], match[2], match[3], match[4]].join('')
  }
  return input.replace(/[^0-9\.]+/g, '');
}

const Phone = () => {
  const styles = useStyles();
  const history = useHistory();
  const [phone, setPhone] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
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
      return;
    }
    const appVerifier = window.recaptchaVerifier;
    setLoading(true);
    firebase
    .auth()
    .signInWithPhoneNumber(phone, appVerifier)
    .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setCodeSent(true);
        setLoading(false);
      })
      .catch(error => {
        console.log({ error });
        setLoading(false);
      });
  }

  const tryVerify = (textedCode) => {
    setLoading(true);

    window.confirmationResult.confirm(textedCode).then(function (result) {
      // User signed in successfully.
      const user = result.user;
      setLoading(false);
      history.push(ROUTES.REDEEM);
    }).catch(function (error) {
      setLoading(false);
      console.log({
        message: 'User couldnt sign in',
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
              onClick={onClick}
            />
          )}
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

const InputPhone = ({
  setPhone,
  buttonRef,
  onClick,
}) => (
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
    <MuiPhoneNumber
      defaultCountry={'us'}
      onlyCountries={['us']}
      onChange={(value) => setPhone(value)}
    />
    &nbsp;
    <Button ref={buttonRef} onClick={onClick}>Next</Button>
  </Grid>
);

const VerifyAccount = ({
  tryVerify,
}) => {
  const [code, setCode] = useState('');

  return (
    <Grid item xs={12}>
      <br />
      <Typography variant="h6" color="inherit">
        We sent you a verification code.
      </Typography>
      <br />
      <br />
      <Typography variant="h4" color="inherit">
        Verify Code
      </Typography>
      <br />
      <br />
      <TextField
        placeholder="Enter Code"
        onChange={(event) => setCode(event.target.value)}
      />&nbsp;
      <Button onClick={() => tryVerify(code)}>Next</Button>
      <br />
      <br />
      <Button onClick={() => window.location.reload()}>Try again</Button>
    </Grid>
  );
};
