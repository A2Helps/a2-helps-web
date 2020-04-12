import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {
  Link,
} from "react-router-dom";
import { HOME } from '../util/routes';
import Banner from '../components/banner';
import Footer from '../components/footer';
import Wrapper from '../components/wrapper';
import Button from '@material-ui/core/Button';
import { makeStyles, styled } from '@material-ui/core/styles';

const StyledLink = styled(Link)({
  padding: '16px',
  textDecoration: 'none',
});


const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    color: '#3D3B39',
  },
  message: {
    marginTop: '50px',
    flexGrow: 1,
    textAlign: 'center',
  },
  spacer: {
    flex: 1,
  },
  heading: {
    maxWidth: '850px',
    margin: '0 auto',
    marginBottom: '5px',
    fontSize: '24px',
    [theme.breakpoints.up('md')]: {
      fontSize: '36px',
    },
  },
  received: {
    fontSize: '20px',
    fontWeight: 300,
    [theme.breakpoints.up('md')]: {
      fontSize: '28px',
    },
  },
  button: {
    marginTop: '20px',
    marginBottom: '50px',
  },
  socialButtons: {
    marginTop: '100px',
  },
  share: {
    marginBottom: '20px',
    opacity: .8,
  },                     
}));

function Cancel() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Wrapper>
        <Grid
            spacing={2}
            container
            className={styles.message}
          >
            <Grid xs={12}>
              
              <Typography variant="h4" color="inherit" className={styles.heading}>
              Your payment has been canceled.
              </Typography>
              <StyledLink
                    to={HOME}
                  >
                  <Button
                    variant="contained"
                    color="secondary"
                    className={styles.button}
                  >
                    Return Home
                  </Button>
              </StyledLink>
              </Grid>
          </Grid>
      </Wrapper>
    </div>
  );
}

export default Cancel;
