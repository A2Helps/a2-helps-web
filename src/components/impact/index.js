import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    color: '#3D3B39',
  },
  impact: {
    fontWeight: 300,
    marginTop: '100px',
    marginBottom: '40px',
    fontSize: '30px',
    [theme.breakpoints.up('md')]: {
      fontSize: '32px',
      marginBottom: '60px',
    },
  },
  img: {
    maxHeight: '100px',
    marginBottom: '7px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '15px',
    },
  },
  impactSection: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  h4: {
    maxWidth: '220px',
    margin: '0 auto',
    marginBottom: '45px',
  },
  h4Top: {
    maxWidth: '220px',
    margin: '0 auto',
    marginBottom: '20px',
  },
}));

export default function Impact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography variant="h3" color="inherit" className={classes.impact}>
        Our Impact
      </Typography>

      <Grid container justify='center'className={classes.impactSection}>

        <Grid item xs={12} md={4} className={classes.impactItem}>
          <Grid item xs={12}>
            <Typography variant="body1" color="inherit" className={classes.h4Top}>
            More than
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img className={classes.img} src="180k.png" alt="180 thousand dollars" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="inherit" className={classes.h4}>
            raised in donations.
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4} className={classes.impactItem}>
          <Grid item xs={12}>
            <Typography variant="body1" color="inherit" className={classes.h4Top}>
            Direct financial support for
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img className={classes.img} src="25plus.png" alt="25 plus" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="inherit" className={classes.h4}>
            local businesses.
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4} className={classes.impactItem}>
          <Grid item xs={12}>
            <Typography variant="body1" color="inherit" className={classes.h4Top}>
            Gift cards sent to
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img className={classes.img} src="800plus.png" alt="800 plus" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="inherit" className={classes.h4}>
            healthcare professionals.
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}
