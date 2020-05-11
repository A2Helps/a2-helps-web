import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MuiPhoneNumber from 'material-ui-phone-number';
import Snackbar from '@material-ui/core/Snackbar';

import Wrapper from '../components/wrapper';
import { validatePhone } from '../components/validate-code/validate-phone';
import optIn from '../models/opt-in';


import {
  useHistory,
} from "react-router-dom";
import 'firebase/auth';


const useStyles = makeStyles(() => ({
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
  input: {
    width: '100%',
  },
  container: {
    marginTop: '50px',
    backgroundColor: '#ffffff',
    maxWidth: '500px',
    paddingBottom: '30px',
    paddingTop: '20px',
    boxShadow: '0px 0px 7px 1px rgba(0,0,0,0.13)',
    borderRadius: '4px',
  },
}));

const OptIn = () => {
  const styles = useStyles();
  const [error, setError] = useState('');
  const [complete, setComplete] = useState(false);

  const [state, setState] = useState({
    name_first: '',
    name_last: '',
    phone: '',
    email: '',
  });

  const submit = async () => {
    if (!state.name_first) {
      setError('Please include your first name.');
    }
    if (!state.name_last) {
      setError('Please include your last name.');
    }
    if (!validatePhone(state.phone)) {
      setError('Please include a valid phone number.');
    }
    if (!state.email || !(state.email || '').split('@').length > 1) {
      setError('Please include a valid email address.');
    }
    const {
      name_first,
      name_last,
      phone,
      email,
    } = state;

    const results = await optIn({
      name_first,
      name_last,
      phone: phone && phone.match(/[0-9]/g).join('').slice(1),
      email,
      onError: (e) => setError('Please include a valid phone number and email address.'),
    });
    console.log({ results });

    if (results.data.success) setComplete(true);
  }

  if (complete) {
    return (
      <div className={styles.root}>
      <Wrapper>
        <Container className={styles.container}>
          <Grid
            spacing={2}
            container
            className={styles.message}
          >
            <h2>You're on the list</h2>
            <Typography>Thank you for opting in.</Typography>
          </Grid>
        </Container>
      </Wrapper>
      </div>
    );
  }

  return (
    <div className={styles.root}>
    <Wrapper>
      <Container className={styles.container}>
        <Grid
          spacing={2}
          container
          className={styles.message}
        >
          <Typography>On behalf of the entire Washtenaw County community, A2 Helps thanks you for your heroic service on the front lines of COVID19. If you'd like to opt in for the chance to receive a token of our appreciation in the form of a $100 gift card to the Washtenaw County restaurant or retail store of your choosing, please list your email below. </Typography>
          <br />
          <TextField
            placeholder="First Name"
            value={state.name_first || ''}
            onChange={(e) => {
              const val = e.target.value;
              setState({
                ...state,
                name_first: val,
              });

            }}
            className={styles.input}
          />
          <br />
          <TextField
            placeholder="Last Name"
            value={state.name_last || ''}
            onChange={(e) => {
              const val = e.target.value;
              setState({
                ...state,
                name_last: val,
              });

            }}
            className={styles.input}
          />
          <br />
          <MuiPhoneNumber
            placeholder="Phone"
            defaultCountry={'us'}
            onlyCountries={['us']}
            value={state.phone || ''}
            onChange={(val) => {
              setState({
                ...state,
                phone: val,
              });

            }}
            className={styles.input}
          />
          <br />
          <br />
          <Typography>Please use your work email address so we can confirm its you.</Typography>
          <br />
          <TextField
            placeholder="Email"
            value={state.email || ''}
            onChange={(e) => {
              const val = e.target.value;
              setState({
                ...state,
                email: val,
              });

            }}
            className={styles.input}
          />
          <br />
          <Button
            onClick={submit}
            className={styles.input}
          >
            Submit
          </Button>
        </Grid>
      </Container>
      </Wrapper>
      <Snackbar anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }} open={!!error} autoHideDuration={6000} onClose={() => setError('')} message={error} action={<React.Fragment>
        <Button color="secondary" size="small" onClick={() => setError('')}>
          Continue
        </Button>
      </React.Fragment>} />
    </div>
  );
}

export default React.memo(OptIn);
