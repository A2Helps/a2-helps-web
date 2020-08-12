import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MuiPhoneNumber from 'material-ui-phone-number';


export const InputPhone = ({ setPhone, buttonRef, onClick, }) => (<Grid item xs={12}>
  <Typography variant="h4" color="inherit" style={{color:"#3D3B39", fontSize:"40px", paddingBottom:'20px'}}>
    Please enter your phone number.
    </Typography>
  <Typography variant="h6" color="inherit" style={{color:"#3D3B39", fontSize:"20px", paddingBottom:'20px'}}>
    We'll text you a verification code.
    </Typography>
  <MuiPhoneNumber defaultCountry={'us'} onlyCountries={['us']} onChange={(value) => setPhone(value)} style={{color:"#3D3B39"}}/>
    &nbsp;
  <Button ref={buttonRef} onClick={onClick}>Next</Button>
</Grid>);
