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


const useStyles = makeStyles(theme => ({  
  root: {
    minHeight: '100vh',
    backgroundColor: '#efefef',
    display: 'flex',
    flexDirection: 'column',
    color: '#3D3B39',
  },
  message: {
    padding: 24,
    flexGrow: 1,
    textAlign: 'left',
    alignItems: 'left',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    width: '100%',
  },
  container: {
    backgroundColor: '#ffffff',
    maxWidth: '500px',
    paddingBottom: '30px',
    paddingTop: '20px',
    boxShadow: '0px 0px 7px 1px rgba(0,0,0,0.13)',
    borderRadius: '4px',
  },
  title: {
    color: '#3D3B39',
    textAlign: 'center',
    paddingBottom: '10px',
    marginTop: '20px',
    fontSize: '30px',
    fontWeight: 300,
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '25px',
      marginTop: '60px',
      fontSize: '32px',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: '20px',
      marginTop: '60px',
    },
  },
  h4: {
    fontSize: '28px',
    fontWeight: 600,
    marginBottom: '10px',
  },
  img: {
    height: '18px',
    width: '18px',
    marginRight: '7px',
  },
  alertBox: {
    marginTop: '10px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  alertText: {
    fontSize: '11px',
    fontStyle: 'italic',
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
      phone: phone && phone.match(/[0-9]/g).join(''),
      email,
      onError: (e) => setError('Please include a valid phone number and email address.'),
    });

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

    //test commit!

  return (
    <div className={styles.root}>
    <Wrapper>
    <Typography className={styles.title}>Thank you!</Typography>

      <Container className={styles.container}>
        <Grid
          spacing={2}
          container
          className={styles.message}
        >
          <Typography className={styles.h4}>Opt In</Typography>

          <Typography className={styles.body}>On behalf of the Washtenaw County community, A2 Helps thanks you for your service on the front lines of COVID-19. </Typography>
          <Typography className={styles.body} style={{marginTop: '10px'}}>Please <b>enter your work email</b> for the chance to receive a $100 gift card to be used toward a number of participating local businesses.</Typography>
          <br />
          <TextField
            label="First Name"
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
            label="Last Name"
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
            label="Mobile Phone"
            disableCountryCode
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
          
          <TextField
            label="Work Email"
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
          <div className={styles.alertBox}>
            <img className={styles.img} src="alert-icon.png" alt="Alert icon." />
            <Typography className={styles.alertText}>We ask for your work email to confirm you work in the healthcare industry. </Typography>
          </div>

          <br />
          <Button
            onClick={submit}
            className={styles.input}
            color="primary"
            variant="contained"
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