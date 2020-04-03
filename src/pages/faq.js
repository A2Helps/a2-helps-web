import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Mission from '../components/mission';
import Wrapper from '../components/wrapper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  ctas: {
    padding: 16,
    flexGrow: 1,
  },
}));

const FAQ = () => {
  return (
    <div>
      <Typography variant="h1">
        FAQs
      </Typography>
      <Typography variant="body1">
        <strong>Where does my money go when it's collected?</strong>
        <p>It goes to the people who need it!</p>
      </Typography>
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
