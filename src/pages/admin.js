import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Banner from '../components/banner';
import Donate from '../components/donate';
import RequestCodes from '../components/request-codes';
import BusinessSignUp from '../components/business-sign-up';
import Footer from '../components/footer';
import { useSession, useAuthRedirect } from '../components/auth/Session';

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
  const { isAuthenticated } = useSession();

  useAuthRedirect();

  if (!isAuthenticated) {
    return null;
  } else {
    return (
      <div className={styles.root}>
        <Banner />
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
}

export default AdminPage;
