import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Mission from '../components/mission';
import Wrapper from '../components/wrapper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '70px',
  },
  question: {
    fontSize: '24px',
    marginTop: '30px',
    marginBottom: '10px',
  },
  answer: {
    fontSize: '18px',
  },
  
}));

const FAQ = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Typography variant="h2">
        FAQs
      </Typography>

        <div className={styles.faq}>
          <Typography className={styles.question} variant="h3" color="inherit">
            Where does my money go when it's collected?
          </Typography>
          <Typography className={styles.answer} variant="body1" color="inherit">
            Where does my money go when it's collected?
          </Typography>
        </div>

    </div>
  )
}



function FaqPage() {
  const styles = useStyles();
  return (
    <Wrapper>
      <FAQ />
    </Wrapper>
  );
}

export default FaqPage;
