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
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 16,
    marginTop: 12,
  }
}));

export default function Donate() {
  const [value, setValue] = React.useState('25');
  const [inputValue, setInputValue] = React.useState('150');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const openDonations = () => {
    let finalValue;
    console.log({
      inputValue,
      value,
    });

    if (inputValue === '' && value === 'other') {
      setOpen(true);
      return;
    }

    if (value === 'other') {
      finalValue = parseInt(inputValue);
    } else {
      finalValue = parseInt(value);
    }

    console.log(finalValue);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <Typography variant="h4" color="inherit">
        Provide Support
      </Typography>
      <Paper className={classes.root}>
        <Typography variant="h6" color="inherit">
          Donate Now
        </Typography>

        <FormControl component="fieldset">
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
          >
            Complete Donation
          </Button>
        </FormControl>
      </Paper>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Submit an amount in dollars you wish to donate."
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              Continue
            </Button>
          </React.Fragment>
        }
      />
    </Grid>
  );
}