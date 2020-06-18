import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Link,
} from "react-router-dom";
import { DONATE, ABOUT, FAQ, DONORS, RESOURCES } from '../../util/routes';
import { donorFlag } from '../../util/feature-flags';

const useStyles = makeStyles((theme) => ({
  mobile: {
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  desktop: {
    display: 'none',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
  },
  menuItem: {
    fontFamily: '"Lato", "Open Sans", sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: 1.4,
    letterSpacing: '0.00938em',
    color: '#3D3B39',
    display: 'block',
  },
  body1: {
    fontFamily: '"Lato", "Open Sans", sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: 1.4,
    letterSpacing: '0.00938em',
    color: '#3D3B39',
    display: 'block',
  },
}));

const StyledLink = styled(Link)({
  padding: '16px',
  textDecoration: 'none',
});

export default function Navigation() {
  const classes = useStyles();

  return (<Grid item>
    <Desktop classes={classes} />
    <Mobile classes={classes} />
  </Grid>);
}

const Mobile = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item xs className={classes.mobile}>
      <MenuIcon
        color="primary"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledLink
          onClick={handleClose}
          className={classes.menuItem}
          to={ABOUT}
        >
          ABOUT
        </StyledLink>
        <StyledLink
          onClick={handleClose}
          className={classes.menuItem}
          to={FAQ}
        >
          FAQ
        </StyledLink>
        {donorFlag() &&
        <StyledLink
          onClick={handleClose}
          className={classes.menuItem}
          to={DONORS}
        >
          DONORS
        </StyledLink>}
        <StyledLink
          onClick={handleClose}
          className={classes.menuItem}
          to={RESOURCES}
        >
          COMMUNITY RESOURCES
        </StyledLink>
        <StyledLink
          onClick={handleClose}
          className={classes.menuItem}
          to={DONATE}
        >
          <Button
            variant="contained"
            color="secondary"
          >
            Donate
          </Button>
      </StyledLink>
      </Menu>
    </Grid>
  );
};

const Desktop = ({ classes }) => {
  // eslint-disable-next-line no-unused-vars
  // const {
  //   isExact: loginRoute = false
  // } = { ...useRouteMatch(LOGIN) };

  return (
  <Grid item xs className={classes.desktop}>
    <StyledLink className={classes.body1} to={ABOUT}>ABOUT</StyledLink>
    <StyledLink className={classes.body1} to={FAQ}>FAQ</StyledLink>
    {donorFlag() && <StyledLink className={classes.body1} to={DONORS}>DONORS</StyledLink>}
    <StyledLink className={classes.body1} to={RESOURCES}>COMMUNITY RESOURCES</StyledLink>
    <StyledLink to={DONATE}>
      <Button
        variant="contained"
        color="secondary"
      >
        Donate
      </Button>
    </StyledLink>
    {/* {(!loginRoute && (process.env.NODE_ENV === 'development')) &&
      <LogInOutButton />
    } */}
  </Grid>
  );
}
