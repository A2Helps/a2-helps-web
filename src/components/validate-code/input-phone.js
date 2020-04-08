import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MuiPhoneNumber from 'material-ui-phone-number';

export const InputPhone = ({ setPhone, buttonRef, onClick, }) => (<Grid item xs={12}>
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
  <MuiPhoneNumber defaultCountry={'us'} onlyCountries={['us']} onChange={(value) => setPhone(value)} />
    &nbsp;
  <Button ref={buttonRef} onClick={onClick}>Next</Button>
</Grid>);
