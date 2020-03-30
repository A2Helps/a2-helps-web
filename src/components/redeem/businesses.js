import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { getProcurements, getBusinessTypes } from './data';

export const useStyles = makeStyles(theme => ({
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 6,
    border: `1px solid ${theme.palette.grey[500]}`,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 3,
  },
  summary: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
  },
  arrows: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const Businesses = ({ businesses }) => {
  const styles = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (<Grid item xs={12} sm={9}>
    {businesses.map((business) => {
      const amount = 25;
      const procurements = getProcurements(business.procurements);
      const businessTypes = getBusinessTypes(business.types);
      return (<ExpansionPanel expanded={expanded === business.id} onChange={handleChange(business.id)} key={business.id}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <div className={styles.summary}>
            <ChevronLeft />
            <Typography className={styles.amount}>{amount}</Typography>
            <ChevronRight />
            <Typography className={styles.heading}>{business.name} - </Typography>
            {businessTypes.map(({ Icon, name }) => (<Icon alt={name} key={name} />))}
            <Typography className={styles.heading}> - </Typography>
            {procurements.map(({ Icon, name }) => (<Icon alt={name} key={name} />))}
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {businessTypes.map(({ Icon, name }) => (<div key={name}>
            <Icon fontSize="small" alt={name} />
            {name}
          </div>))}
          <br />
          {procurements.map(({ Icon, name }) => (<div key={name}>
            <Icon fontSize="small" alt={name} />
            {name}
          </div>))}
        </ExpansionPanelDetails>
      </ExpansionPanel>);
    })}
  </Grid>);
};
