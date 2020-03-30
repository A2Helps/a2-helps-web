import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getProcurements, getBusinessTypes } from './data';
import { useStyles } from '../../pages/redeem';

export const Businesses = ({ businesses }) => {
  const styles = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (<Grid item xs={12} sm={9}>
    {businesses.map((business) => {
      const procurements = getProcurements(business.procurements);
      const businessTypes = getBusinessTypes(business.types);
      return (<ExpansionPanel expanded={expanded === business.id} onChange={handleChange(business.id)} key={business.id}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" className={styles.summary}>
          <Checkbox className={styles.checkbox} />
          <Typography className={styles.heading}>{business.name} - </Typography>
          {businessTypes.map(({ Icon, name }) => (<Icon alt={name} key={name} />))}
          <Typography className={styles.heading}> - </Typography>
          {procurements.map(({ Icon, name }) => (<Icon alt={name} key={name} />))}
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
