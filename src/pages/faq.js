import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Wrapper from '../components/wrapper';
import { Typography } from '@material-ui/core';
// import { donorFlag } from '../util/feature-flags';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px auto',
    maxWidth: '900px',
    color: '#3D3B39',
    [theme.breakpoints.up('md')]: {
      marginBottom: '100px',
      marginTop: '60px',
    },
  },
  faq: {
    marginTop: '20px',
  },
  question: {
    fontSize: '20px',
    marginTop: '30px',
    marginBottom: '10px',
    color: 'primary',
  },
  link: {
    color: '#3D3B39',
  },

  h2: {
    fontWeight: 300,
    fontSize: '30px',
    [theme.breakpoints.up('md')]: {
      fontSize: '42px',
    },
    
  },
}));

const FAQ = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      {/* <Typography variant="h2" className={styles.h2}>
        Gift Card Codes
      </Typography> */}

        <div className={styles.faq}>
          <Typography className={styles.question} variant="h3" color="inherit">
            Still have a code to redeem?
          </Typography>
          <Typography className={styles.answer} variant="body1" color="inherit">
          Please email <a href="mailto:help@a2helps.com" target="_top" className={styles.link}>help@a2helps.com</a> for assistance. One of our volunteers will coordinate with you directly to purchase your gift card selections.
          </Typography>
          <Typography className={styles.answer} variant="body1" color="inherit">
          <br></br>Thank you for everything you do to keep our community safe!
          </Typography>
        </div>
{/* 
        <div className={styles.faq}>
          <Typography className={styles.question} variant="h3" color="inherit">
            How exactly does payment work for participating businesses?
          </Typography>
          <Typography className={styles.answer} variant="body1" color="inherit">
          A2 Helps will purchase e-gift cards from your online store and transfer the e-gift card code to a healthcare professional working on the front lines.
          </Typography>
        </div>

        <div className={styles.faq}>
          <Typography className={styles.question} variant="h3" color="inherit">
            What will those gift card sales look like in my sales reports?
          </Typography>
          <Typography className={styles.answer} variant="body1" color="inherit">
            Sales will show up in your POS system under the name ‘A2 Helps’. You will not currently have the ability to search for individual recipients by name.
          </Typography>
        </div>

        <div className={styles.faq}>
          <Typography className={styles.question} variant="h3" color="inherit">
          How will my customers pay with their e-gift cards, and how can I help them look up their code if they lost their code?
          </Typography>
          <Typography className={styles.answer} variant="body1" color="inherit">
          Recipients will always have the ability to pull up the e-gift cards associated with their phone number, so as long as they don’t lose access to both their email and phone, they will be able to enjoy shopping with you!
          </Typography>
        </div>

     {/*    <div className={styles.faq}>
          <Typography className={styles.question} variant="h3" color="inherit">
            I do not have an e-gift card. Can I still receive your support?
          </Typography>
          <Typography className={styles.answer} variant="body1" color="inherit">
            Absolutely!
          </Typography>
        </div> */}

        {/* <div className={styles.faq}>
          <Typography className={styles.question} variant="h3" color="inherit">
            I am a business owner. How can I use the money I receive from A2 Helps?
          </Typography>
          <Typography className={styles.answer} variant="body1" color="inherit">
          You can use the money you receive from A2 Helps however you see fit to support the long term health of your business. Certain businesses we are working with have developed a system to support their employees with compensation, while others are using those funds to pay rent. Either way, you decide!
          </Typography>
        </div>

        <div className={styles.faq}>
          <Typography className={styles.question} variant="h3" color="inherit">
          I am a healthcare professional. How long do I have to redeem my gift card code?
          </Typography>
          <Typography className={styles.answer} variant="body1" color="inherit">
          To ensure we help as many healthcare professionals as possible, your gift card code will expire 30-days after it is issued.
          </Typography>
        </div>

        {donorFlag() &&
        <div className={styles.faq}>
          <Typography className={styles.question} variant="h3" color="inherit">
          I am a donor with a large donation. How should I donate?
          </Typography>
          <Typography className={styles.answer} variant="body1" color="inherit">
          Checks are preferred for donations larger than $500 since there are fees associated with larger transactions. Checks can be made out to: Ann Arbor SPARK Foundation. Memo: #a2helps. You can mail them to the SPARK address: 330 E Liberty St, Lower Level, Ann Arbor, MI 48104.
          </Typography>
        </div>}  */}

    </div>
  )
}

function FaqPage() {
  return (
    <Wrapper>
      <FAQ />
    </Wrapper>
  );
}

export default FaqPage;
