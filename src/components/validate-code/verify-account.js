import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const VerifyAccount = ({ tryVerify, }) => {
  const [code, setCode] = useState('');
  return (<Grid item xs={12}>
    <br />
    <Typography variant="h6" color="inherit">
      We sent you a verification code.
      </Typography>
    <br />
    <br />
    <Typography variant="h4" color="inherit">
      Verify Code
      </Typography>
    <br />
    <br />
    <TextField placeholder="Enter Code" onChange={(event) => setCode(event.target.value)} />&nbsp;
    <Button onClick={() => tryVerify(code)}>Next</Button>
    <br />
    <br />
    <Button onClick={() => window.location.reload()}>Try again</Button>
  </Grid>);
};
