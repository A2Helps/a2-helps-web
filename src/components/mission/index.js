import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    color: '#3D3B39',
  },
  mission: {
    fontWeight: 300,
    marginTop: '70px',
    marginBottom: '40px',
    fontSize: '30px',
    [theme.breakpoints.up('md')]: {
      fontSize: '32px',
      marginBottom: '60px',
    },
  },
  img: {
    maxHeight: '40px',
    marginBottom: '7px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '15px',
    },
  },
  missionSection: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  h4: {
    maxWidth: '220px',
    margin: '0 auto',
    marginBottom: '45px',
  },
}));

export default function Mission() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography variant="h3" color="inherit" className={classes.mission}>
        Our Mission
      </Typography>

      <Grid container xs={12} justify='center'className={classes.missionSection}>

        <Grid item xs={12} md={4} className={classes.missionItem}>
          <Grid item xs={12}>
            <img className={classes.img} src="honor.png" alt="Hand holding heart icon." />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="inherit" className={classes.h4}>
              Honor those who are protecting our health and keeping us well stocked with food and other needs.
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4} className={classes.missionItem}>
          <Grid item xs={12}>
            <img className={classes.img} src="provide.png" alt="Coin with dollar sign icon." />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="inherit" className={classes.h4}>
            Provide direct financial assistance to local businesses to ensure they survive this pandemic.
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4} className={classes.missionItem}>
          <Grid item xs={12}>
            <img className={classes.img} src="share.png" alt="Three people standing in a row icon." />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="inherit" className={classes.h4}>
              Share community-wide resources and opportunities to support those affected.
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}
