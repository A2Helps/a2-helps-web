import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Donate from '../components/donate';
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
          <Donate />
        </Grid>
      </Container>
      <div className={styles.spacer} />
      <Footer />
    </div>
  );
}

export default Confirm;
