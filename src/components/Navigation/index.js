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
}));

const StyledLink = styled(Link)({
  padding: '0 10px',
  textDecoration: 'none',
});

export default function Navigation() {
  const classes = useStyles();

  return (
      <Grid item xs className={classes.root}>
        <StyledLink to={ABOUT}>About</StyledLink>
        <StyledLink to={FAQ}>FAQ</StyledLink>
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
