import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Link,
} from "react-router-dom";
import { DONATE, ABOUT, FAQ } from '../../util/routes';

const useStyles = makeStyles((theme) => ({
  mobile: {
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  desktop: {
    display: 'none',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
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

const Desktop = ({ classes }) => (
  <Grid item xs className={classes.desktop}>
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
