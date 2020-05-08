import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MuiPhoneNumber from 'material-ui-phone-number';

import Wrapper from '../components/wrapper';


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
  const history = useHistory();

  const [state, setState] = useState({});


  useEffect(() => {
  });

  const submit = (results) => {
    console.log('submit');
    console.log(state);
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
          <Typography>On behalf of the entire Washtenaw county community, A2 Helps thanks you for your heroic service on the front lines of COVID19. If you'd like to opt in for the chance to receive a token of our appreciation in the form of a $100 gift card to the Washtenaw County restaurant or reatil store of your choosing, please list your email below. </Typography>
          <br />
          <TextField
            placeholder="First Name"
            value={state.first_name || ''}
            onChange={(e) => {
              const val = e.target.value;
              setState({
                ...state,
                first_name: val,
              });

            }}
            className={styles.input}
          />
          <br />
          <TextField
            placeholder="Last Name"
            value={state.last_name || ''}
            onChange={(e) => {
              const val = e.target.value;
              setState({
                ...state,
                last_name: val,
              });

            }}
            className={styles.input}
          />
          <br />
          <MuiPhoneNumber
            defaultCountry={'us'}
            onlyCountries={['us']}
            placeholder="Phone"
            value={state.phone || ''}
            onChange={(val) => {
              console.log({val});

              setState({
                ...state,
                phone: val,
              });

            }}
            className={styles.input}
          />
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
    </div>
  );
}

export default React.memo(OptIn);
