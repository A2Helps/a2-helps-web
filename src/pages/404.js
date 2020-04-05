import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Mission from '../components/mission';
import Banner from '../components/banner';
import Footer from '../components/footer';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  h1: {
    fontSize: '26px',
    paddingTop: '60px',
    fontWeight: '300',
    color: '#3D3B39',
    [theme.breakpoints.up('sm')]: {
      fontSize: '38px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '46px',
    },
  },
  spacer: {
    flex: 1,
  },
}));

function NoMatch() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Banner />
        <Container>
          <Grid item xs={12}>
            <Typography variant="h1" color="inherit" className={classes.h1}>
              Oops! We can't find that page.
            </Typography>
          </Grid>
        </Container>
      <div className={classes.spacer} />
      <Footer />
    </div>
  );
}

export default NoMatch;