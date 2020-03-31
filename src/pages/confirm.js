import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Footer from '../components/footer';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
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
  spacer: {
    flex: 1,
  },
  img: {
    width: '50%',
    maxWidth: '240px',
    minWidth: '62px',
  },
}));

function Confirm() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Container>
        <Grid
          spacing={2}
          container
          className={styles.message}
        >

          <Grid item xs={12}>
            <img className={styles.img} src="logo_fullColor_transparentBG.png" alt="A2Cares" />
          </Grid>
          <Grid item xs={12}>
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
            <TextField
              placeholder="Enter Code"
            />&nbsp;
            <Button>Next</Button>
            <br />
            <br />
            <Button>Resend</Button>
          </Grid>
        </Grid>
      </Container>
      <div className={styles.spacer} />
      <Footer />
    </div>
  );
}

export default Confirm;
