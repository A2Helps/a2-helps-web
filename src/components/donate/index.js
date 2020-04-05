import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { EmptySubmissionSnackbar } from './empty-submission-snackbar';
import { submitDonation } from './submit-donation';

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
  form: {
    width: '100%',
  },
  button: {
    width: '100%',
    marginTop: '7px',
  },
}));

export default function Donate() {
  const [value, setValue] = React.useState('25');
  const [inputValue, setInputValue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleInputChange = event => {
    setInputValue(event.target.value.replace(/\D/g,''));
  };

  const openDonations = () => {
    let finalValue;

    if (inputValue === '' && value === 'other') {
      setOpen(true);
      return;
    }

    if (value === 'other') {
      finalValue = parseInt(inputValue);
    } else {
      finalValue = parseInt(value);
    }

    submitDonation(finalValue * 100);
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
            <FormControlLabel value="25" control={<Radio />} label="25" />
            <FormControlLabel value="50" control={<Radio />} label="50" />
            <FormControlLabel value="100" control={<Radio />} label="100" />
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


