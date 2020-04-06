import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import {
  Link,
} from "react-router-dom";
import { EmptySubmissionSnackbar } from './empty-submission-snackbar';
import { submitDonation } from './submit-donation';
import { WIRE } from '../../util/routes';

const StyledLink = styled(Link)({
  textDecoration: 'none',
});

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
  question: {
    fontSize: '13px',
  },
  form: {
    width: '100%',
  },
  button: {
    width: '100%',
    marginTop: '7px',
  },
}));

export default function Donate() {
  const [listingAllowed, setListingAllowed] = React.useState(true);
  const [listingName, setListingName] = React.useState('');
  const [value, setValue] = React.useState('25');
  const [inputValue, setInputValue] = React.useState('');
  const [addCCValue, setAddCCFeeValue] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleInputChange = event => {
    setInputValue(event.target.value.replace(/\D/g,''));
  };

  const handleCardFeeChange = event => {
    setAddCCFeeValue(event.target.checked);
  };

  const computeCCFee = (donationValue) => {
    if (!addCCValue) return donationValue;
    const finalDonation = (donationValue + 0.3) / .971;

    return finalDonation.toFixed(2);
  };

  const computeFinalValue = () => {
    if (value === 'other') {
      if (inputValue === '') return 0;
      return computeCCFee(parseInt(inputValue));
    }

    return computeCCFee(parseInt(value));
  }

  const openDonations = () => {
    if (inputValue === '' && value === 'other') {
      setOpen(true);
      return;
    }

    const finalValue = computeFinalValue();

    submitDonation({
      amount: finalValue * 100,
      isPublic: listingAllowed,
      public_name: listingName,
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
          Donate Now
        </Typography>
        <Typography variant="body1" color="inherit" className={classes.body}>
          We have partnered with the Ann Arbor Spark foundation as our 501(c)(3) fiduciary partner. All contributions are 100% tax dedicutibe.
        </Typography>
        <FormControl component="fieldset" className={classes.form}>
          <FormLabel component="legend">Amount</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="25" control={<Radio />} label="$25" />
            <FormControlLabel value="50" control={<Radio />} label="$50" />
            <FormControlLabel value="100" control={<Radio />} label="$100" />
            <FormControlLabel
              value="other"
              control={
                <Radio />
              }
              label={
                <TextField
                  id="outlined-basic"
                  label="Other amount"
                  value={inputValue}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                  }}
                />
              }
            />
          </RadioGroup>
          <br />
          <br />
          <FormLabel component="legend" className={classes.question}>Would you like your name listed on the donor's page?</FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={listingAllowed}
                onChange={() => setListingAllowed(!listingAllowed)}
                name="listingAllowed"
                color="secondary"
              />
            }
            label="List my name."
          />
          <TextField
            id="outlined-basic"
            label="How would you like to be named?"
            disabled={!listingAllowed}
            value={listingName}
            onChange={(event) => setListingName(event.target.value)}
          />
          <br />
          <br />
          <FormLabel component="legend" className={classes.question}>
            Please consider covering the credit card processing fees associated with your gift:
          </FormLabel>
          <FormControlLabel className={classes.addFee}
            control={
              < Checkbox checked={addCCValue} onChange={handleCardFeeChange} />
            }
            label="Add 2.9% + $0.30 to my donation"
          />
          <Typography variant="body1" color="inherit" className={classes.ccFees}>
            <strong>Total Donation: ${computeFinalValue()}</strong>
          </Typography>
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={openDonations}
            className={classes.button}
          >
            Complete Donation
          </Button>
          <br />
          <FormLabel component="legend">
            For large amounts consider wiring your donation.
          </FormLabel>
          <br />
          <StyledLink to={WIRE}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Get wiring instructions
            </Button>
          </StyledLink>
        </FormControl>
      </Paper>
      <EmptySubmissionSnackbar open={open} setOpen={setOpen} />
    </Grid>
  );
}


