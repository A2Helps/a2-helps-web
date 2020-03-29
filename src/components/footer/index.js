import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    borderTop: '1px solid #3D3B39',
    padding: 32,
    marginTop: 32,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="body1" color="inherit">
          Made with <strong>♥</strong> by volunteers in Ann Arbor, MI.
        </Typography>
      </Container>
    </div>
  );
}
