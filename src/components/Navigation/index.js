import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {
  Link,
} from "react-router-dom";
import { DONATE, ABOUT, FAQ } from '../../util/routes';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'right',
  },
  body1: {
    fontFamily: '"Lato", "Open Sans", sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: 1.4,
    letterSpacing: '0.00938em',
    color: '#3D3B39',
  },
}));

const StyledLink = styled(Link)({
  padding: '0 40px',
  paddingRight: '0',
  textDecoration: 'none',
});

export default function Navigation() {
  const classes = useStyles();

  return (
      <Grid item xs className={classes.root}>
        <StyledLink className={classes.body1} to={ABOUT}>ABOUT</StyledLink>
        <StyledLink className={classes.body1} to={FAQ}>FAQ</StyledLink>
        <StyledLink to={DONATE}>
          <Button
            variant="contained"
            color="secondary"
          >
            Donate
          </Button>
        </StyledLink>
        {/* <LogInOutButton /> */}
      </Grid>
  );
}
