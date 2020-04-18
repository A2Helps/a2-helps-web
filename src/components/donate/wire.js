import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import {
  useHistory,
} from "react-router-dom";
import { EmptySubmissionSnackbar } from './empty-submission-snackbar';
import { submitWire } from './submit-donation';
import { WIRE_SUCCESS } from '../../util/routes';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 40,
    boxShadow: '0px 0px 7px 1px rgba(0,0,0,0.13)',
    color: '#3D3B39',
    minHeight: '370px',
    maxWidth: '580px',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {

    },
    [theme.breakpoints.up('md')]: {
    },
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
  body: {
    marginBottom: '30px',
  },
  ccFeesMessage: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '13px',
  },
  ccFees: {
    marginTop: '10px',
  },
  addFee: {
    fontSize: '12px',
  },
  form: {
    width: '100%',
  },
  button: {
    width: '100%',
    marginTop: '7px',
  },
}));

export default function Wire() {
  const [amount, setAmount] = React.useState('');
  const [wireName, setWireName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [listingAllowed, setListingAllowed] = React.useState(true);
  const [listingName, setListingName] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const openDonations = () => {
    if (!amount) {
      setOpen(true);
      return;
    }

    submitWire({
      amount: amount * 100,
      isPublic: listingAllowed,
      public_name: listingName,
      wired_from: wireName,
      email,
      callback: () => history.push(WIRE_SUCCESS),
      onError: () => setOpen(true),
    });
  };

  const classes = useStyles();

  return (
    <Grid item xs={12} lg={6}>
      <Typography variant="h3" color="inherit" className={classes.title}>
        Support the Ann Arbor Community
      </Typography>
      <Paper className={classes.root}>
        <Typography variant="h4" color="inherit" className={classes.h4}>
          Donate by Wire
        </Typography>
        <Typography variant="body1" color="inherit" className={classes.body}>
          We have partnered with the Ann Arbor Spark foundation as our 501(c)(3) fiduciary partner. All contributions are 100% tax dedicutibe.
        </Typography>
        <FormControl component="fieldset" className={classes.form}>
          <FormLabel component="legend">Wire Amount</FormLabel>
          <TextField
            id="outlined-basic"
            label="Amount"
            value={amount}
            onChange={(event) => {
              const results = event.target.value.match(/[0-9]+/g);

              setAmount(
                results
                ? results.join('')
                : ''
              );
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Wire Name"
            value={wireName}
            onChange={(event) => setWireName(event.target.value)}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <br />
          <FormLabel component="legend">Would you like your name listed on the donor's page?</FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={listingAllowed}
                onChange={() => setListingAllowed(!listingAllowed)}
                name="listingAllowed"
                color="primary"
              />
            }
            label="List my name."
          />
          <TextField
            id="outlined-basic"
            label="Listing Name"
            disabled={!listingAllowed}
            value={listingName}
            onChange={(event) => setListingName(event.target.value)}
          />
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={openDonations}
            className={classes.button}
          >
            Complete Donation
          </Button>
        </FormControl>
      </Paper>
      <EmptySubmissionSnackbar open={open} setOpen={setOpen} />
    </Grid>
  );
}


