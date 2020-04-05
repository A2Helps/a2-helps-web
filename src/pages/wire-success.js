import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {
  Link,
} from "react-router-dom";
import { HOME } from '../util/routes';
import Banner from '../components/banner';
import Footer from '../components/footer';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
  },
  message: {
    padding: 64,
    flexGrow: 1,
    textAlign: 'center',
  },
  spacer: {
    flex: 1,
  },
}));

function WireSuccess() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Banner />
      <Container>
        <Grid
          spacing={2}
          container
          className={styles.message}
        >
          <Grid xs={12}>
            <br />
            <Typography variant="h4" color="inherit">
              <strong>Thank you</strong> for supporting local healthcare professionals and businesses.
            </Typography>
            <br />
            <br />
            <Typography variant="h6" color="inherit">
              You will receive an email containing instuctions for your next steps.
              <br />
              <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="I just donated to @a2helps! If you'd like to contribute to the mission of supporting our local businesses and workers on the front lines of #COVID19, head over to https://www.a2helps.com/donate" data-url="https://a2helps.com/donate " data-hashtags="kindnessiscontagioustoo " data-show-count="false">Tweet</a>
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              <br />
              <Link to={HOME}>Return home.</Link>
            </Typography>
          </Grid>
        </Grid>
        <div className={styles.spacer} />
        <Footer />
      </Container>
    </div>
  );
}

export default WireSuccess;