import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getFulfillments, getBusinessTypes } from './data';
import { AmountPicker } from './amount-picker';

export const useStyles = makeStyles(theme => ({
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  picker: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
  },
}));


export const Businesses = ({
  businesses,
  decrementCredits,
  incrementCredits,
  allocation,
}) => {
  const styles = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (<Grid item xs={12} sm={9}>
    {businesses.map((business) => {
      const fulfillments = getFulfillments(business.fulfillments);
      const businessTypes = getBusinessTypes(business.types);
      return (<ExpansionPanel expanded={expanded === business.id} onChange={handleChange(business.id)} key={business.id}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <AmountPicker
            decrementCredits={decrementCredits}
            incrementCredits={incrementCredits}
            business={business}
            allocation={allocation}
          />
          <div className={styles.picker}>
            <Typography className={styles.heading}>{business.name} - </Typography>
            {businessTypes.map(({ Icon, name }) => (<Icon alt={name} key={name} />))}
            <Typography className={styles.heading}> - </Typography>
            {fulfillments.map(({ Icon, name }) => (<Icon alt={name} key={name} />))}
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {businessTypes.map(({ Icon, name }) => (
            <div key={name}>
              <Icon fontSize="small" alt={name} />
              {name}
            </div>
          ))}
          <br />
          {fulfillments.map(({ Icon, name }) => (
            <div key={name}>
              <Icon fontSize="small" alt={name} />
              {name}
            </div>
          ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>);
    })}
  </Grid>);
};


