import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  Link,
} from "react-router-dom";
import { HOME } from '../util/routes';
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

function WireSuccess() {
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
                Thank you for supporting local healthcare professionals and Washtenaw County businesses.
              </Typography>

              <Typography variant="h6" color="inherit" className={styles.received}>
              You will receive an email containing instuctions for your next steps.
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

                <div className={styles.socialButtons}>
                <Typography className={styles.share}>
                Share that you donated to A2 Helps on social media!
                </Typography>

                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="I just donated to @a2helps! If you'd like to contribute to the mission of supporting our local businesses and workers on the front lines of #COVID19, head over to https://www.a2helps.com/donate" data-url="https://a2helps.com/donate " data-hashtags="kindnessiscontagioustoo " data-show-count="false">Tweet</a>
                </div>
            </Grid>
          </Grid>
      </Wrapper>
    </div>
  );
}

export default WireSuccess;
