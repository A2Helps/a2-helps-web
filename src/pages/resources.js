import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Wrapper from '../components/wrapper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px auto',
    maxWidth: '900px',
    color: '#3D3B39',
    marginBottom: '0',
    [theme.breakpoints.up('md')]: {
      marginBottom: '10px',
      marginTop: '100px',
    },
  },
  subtitle: {
    fontSize: '20px',
    marginTop: '10px',
    marginBottom: '20px',
    maxWidth: '700px',
    fontWeight: 600,
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
    },
  },
  h2: {
    fontWeight: 300,
    fontSize: '30px',
    marginBottom: '20px',
    [theme.breakpoints.up('md')]: {
      fontSize: '42px',
    },
  },
  h3: {
    textAlign: 'center',
    fontSize: '20px',
    marginTop: '20px',
    color: '#3D3B39',
    fontWeight: 600,
    marginBottom: '5px',
    textDecoration: 'underline white',
  },
  h4: {
    textAlign: 'center',
    margin: '0 auto',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#719F20',
    textDecoration: 'underline white',
    marginBottom: '20px'
  },
  body: {
    marginBottom: '40px',
  },
  card: {
    boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.18)',
    maxWidth: '285px',
    borderRadius: '3px',
    margin: '0 auto',
    marginBottom: '30px',
  },
  cardEmpty: {
    width: '296.25px',

  },

  image: {
    width: '100%',
    borderRadius: '3px 3px 0px 0px',
  },
  container: {
    margin: '0 auto',
  },
  
  resources: {
    marginBottom: '60px',
  },
  otherWays: {
    marginTop: '30px',
  },
}));

const AboutContent = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Typography variant="h2" className={styles.h2}>
        Community Resources
      </Typography>
      <Typography variant="body1" className={styles.body}>
        We're highlighting some of the phenomenal organizations and businesses in Washtenaw County that are going above and beyond for their employees and providing relief for our residents. Learn more about the great work happening in our community and ways you can contribute to keep A2 open for business long after the COVID-19 pandemic is over.
      </Typography>

      <Grid container justify='flex-start' className={styles.resources}>
      
        <Grid item className={styles.card}>
          <a target="_blank" rel="noopener noreferrer" href="https://a2neighbors.givingfuel.com/covid-19">
            <img className={styles.image} src={"resources/a2neighbors.png"} alt="A2 Hospitality Fundraiser" />
            <div className={styles.container}>
              <Typography variant="h3" className={styles.h3}>
                A2Neighbors
              </Typography>
              <Typography variant="h4" className={styles.h4}>
              Community Support
              </Typography>
            </div>
          </a>
        </Grid>
        <Grid item className={styles.card}>
          <a target="_blank" rel="noopener noreferrer" href="https://giveandgetlocal.com/">
            <img className={styles.image} src={"resources/square.png"} alt="Give and Get Local" />
            <div className={styles.container}>
              <Typography variant="h3" className={styles.h3}>
                Give and Get Local
              </Typography>
              <Typography variant="h4" className={styles.h4}>
                Community Support
              </Typography>
            </div>
          </a>
        </Grid>

        <Grid item className={styles.card}>
          <a target="_blank" rel="noopener noreferrer" href="https://www.micovidcare.com">
            <img className={styles.image} src={"resources/micovidcare.png"} alt="MI Covid Care" />
            <div className={styles.container}>
              <Typography variant="h3" className={styles.h3}>
                 MI Covid Care
              </Typography>
              <Typography variant="h4" className={styles.h4}>
                Community Support
              </Typography>
            </div>
          </a>
        </Grid>

        <Grid item className={styles.card}>
          <a target="_blank" rel="noopener noreferrer" href="https://www.restimulate.org/">
            <img className={styles.image} src={"resources/restimulate.png"} alt="reSTIMULATE" />
            <div className={styles.container}>
              <Typography variant="h3" className={styles.h3}>
                reSTIMULATE
              </Typography>
              <Typography variant="h4" className={styles.h4}>
                Community Support
              </Typography>
            </div>
          </a>
        </Grid>

         <Grid item className={styles.card}>
          <a target="_blank" rel="noopener noreferrer" href="https://www.savemifaves.org/">
            <img className={styles.image} src={"resources/savemifaves.png"} alt="Save MI Faves" />
            <div className={styles.container}>
              <Typography variant="h3" className={styles.h3}>
                Save MI Faves
              </Typography>
              <Typography variant="h4" className={styles.h4}>
                Community Support
              </Typography>
            </div>
          </a>
        </Grid>

        <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://specialty-foods.square.site/product/buy-a-sandwich-for-a-health-care-hero/674">
          <img className={styles.image} src={"resources/zingermans.png"} alt="Zingermans Sandwiches" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
             Zingerman's 
            </Typography>
            <Typography variant="h4" className={styles.h4}>
            Sandwiches for Healthcare workers 
            </Typography>
          </div>
        </a>
      </Grid>


      </Grid>

    <Typography variant="h2" className={styles.h2}>
        Other Ways to Help
      </Typography>

      <Grid container justify='flex-start' className={styles.otherWays}>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/please-help-us-support-frita-staff">
          <img className={styles.image} src={"resources/frita.png"} alt="Frita Batidos" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              Frita Batidos
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              General Support
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/grange-kitchen-and-bar-staff">
          <img className={styles.image} src={"resources/grange.png"} alt="Grange" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              Grange
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              Employee Relief Fund
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/haymaker-public-house-employee-relief-fund">
          <img className={styles.image} src={"resources/haymaker.png"} alt="Haymaker" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              Haymaker
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              Staff Support
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/homes-staff-relief-fund">
          <img className={styles.image} src={"resources/homes.png"} alt="HOMES" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              HOMES
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              Staff Support
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/support-literati-bookstore-amp-booksellers">
          <img className={styles.image} src={"resources/literati.png"} alt="Literati" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              Literati
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              General Support
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/literati-coffee-staff-needs-your-help">
          <img className={styles.image} src={"resources/literati-coffee.png"} alt="Literati Coffee" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              Literati Coffee
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              Staff Support
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/ManiIsalitaMiketteStaff">
          <img className={styles.image} src={"resources/mani.png"} alt="Mani, Isalita & Mikette" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              Mani, Isalita & Mikette
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              Staff Support
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/support-ann-arbors-local-fish-market/donate">
          <img className={styles.image} src={"resources/monahans.png"} alt="Monahan's Fish Market" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              Monahan's Fish Market
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              Staff Support
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/help-support-the-nightcaplofi-staff">
          <img className={styles.image} src={"resources/nightcap.png"} alt="Nightcap/LoFi" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              Nightcap/LoFi
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              Staff Support
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/old-town-tavern-staff">
          <img className={styles.image} src={"resources/old-town.png"} alt="Old Town" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              Old Town
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              Staff Support
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/the-ravens-club-staff-support-fund">
          <img className={styles.image} src={"resources/ravens-club.png"} alt="Ravens Club" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              Ravens Club
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              Staff Support
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/donate-for-alley-bar-staff">
          <img className={styles.image} src={"resources/alley-bar.png"} alt="The Alley Bar" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              The Alley Bar
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              Staff Support
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.indiegogo.com/projects/financial-relief-for-employees-of-the-last-word">
          <img className={styles.image} src={"resources/last-word.png"} alt="The Last Word" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              The Last Word
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              Staff Support
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://charity.gofundme.com/o/en/campaign/support-the-michigan-and-state-theaters1">
          <img className={styles.image} src={"resources/michigan-theater.png"} alt="The Michigan Theater" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              The Michigan Theater
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              Staff Support, Rent, Utilities
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/1xjz7hzhmo">
          <img className={styles.image} src={"resources/sports-bar.png"} alt="The Sports Bar" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              The Sports Bar
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              Staff Support
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/support-tiny-buddha-yoga">
          <img className={styles.image} src={"resources/tiny-buddha.png"} alt="Tiny Buddha" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              Tiny Buddha
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              Studio Support
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://whatscookinga2.com/week_zen.htm">
          <img className={styles.image} src={"resources/whats-cooking.png"} alt="What's Cooking Ann Arbor" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              What's Cooking Ann Arbor
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              Community Support
            </Typography>
          </div>
        </a>
      </Grid>

      <Grid item className={styles.card}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/help-the-grotto">
          <img className={styles.image} src={"resources/zal-gaz.png"} alt="Zal Gaz Grotto" />
          <div className={styles.container}>
            <Typography variant="h3" className={styles.h3}>
              Zal Gaz Grotto
            </Typography>
            <Typography variant="h4" className={styles.h4}>
              Property Taxes
            </Typography>
          </div>
        </a>
      </Grid>

    </Grid>
    </div>
  )
}

function About() {
  return (
    <Wrapper>
      <AboutContent />
    </Wrapper>
  );
}

export default About;
