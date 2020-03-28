import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

export const EmptySubmissionSnackbar = ({ setOpen, open }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (<Snackbar anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'center',
  }} open={open} autoHideDuration={6000} onClose={handleClose} message="Submit an amount in dollars you wish to donate." action={<React.Fragment>
    <Button color="secondary" size="small" onClick={handleClose}>
      Continue
    </Button>
  </React.Fragment>} />);
};
