import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Banner from '../components/banner';
import Donate from '../components/donate';
import RequestCodes from '../components/request-codes';
import BusinessSignUp from '../components/business-sign-up';
import Footer from '../components/footer';
import LogInOutButton from '../components/auth/LogInOutButton';
import { withUserExists } from '../components/auth/Session';
import { withFirebase } from '../components/auth/Firebase';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
  },
  ctas: {
    padding: 16,
    flexGrow: 1,
  },
  spacer: {
    flex: 1,
  },
}));

function AdminPage() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Banner />
      <LogInOutButton />
      <Container>
        <Grid
          spacing={2}
          container
          className={styles.ctas}
        >
          <Donate />
          <RequestCodes />
          <BusinessSignUp />
        </Grid>
      </Container>
      <div className={styles.spacer} />
      <Footer />
    </div>
  );
}

export default withRouter(withFirebase(withUserExists(AdminPage)));
