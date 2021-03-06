import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

export const RedemptionErrorSnackbar = ({ setOpen, open }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (<Snackbar anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'center',
  }} open={open} autoHideDuration={6000} onClose={handleClose} message="There was an issue processing your request. Please contact support." action={<React.Fragment>
    <Button color="secondary" size="small" onClick={handleClose}>
      Continue
    </Button>
  </React.Fragment>} />);
};
