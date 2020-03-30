import LocalGroceryStore from '@material-ui/icons/LocalGroceryStore';
import Fastfood from '@material-ui/icons/Fastfood';
import Restaurant from '@material-ui/icons/Restaurant';
import DriveEta from '@material-ui/icons/DriveEta';
import LocalShipping from '@material-ui/icons/LocalShipping';
import Streetview from '@material-ui/icons/Streetview';
const BUSINESS_TYPE = {
  GROCERY: {
    Icon: LocalGroceryStore,
    name: 'Grocery Store',
  },
  FAST_FOOD: {
    Icon: Fastfood,
    name: 'Fast Food',
  },
  RESTAURANT: {
    Icon: Restaurant,
    name: 'Restaurant',
  },
};
const PROCURMENTS = {
  DELIVERY: {
    Icon: LocalShipping,
    name: 'Delivery',
  },
  PICK_UP: {
    Icon: DriveEta,
    name: 'Pick Up',
  },
  CURBSIDE_PICK_UP: {
    Icon: Streetview,
    name: 'Curbside Pick UP',
  },
};
export const getBusinessTypes = (keys) => {
  return keys.map((key) => BUSINESS_TYPE[key]);
};
export const getProcurements = (keys) => {
  return keys.map((key) => PROCURMENTS[key]);
};
export const STUB_BUSINESSES = [{
  types: ['RESTAURANT'],
  procurements: ['DELIVERY', 'PICK_UP'],
  name: 'The Lunch Room',
  id: '1',
}, {
  types: ['RESTAURANT', 'GROCERY'],
  procurements: ['DELIVERY', 'PICK_UP'],
  name: 'Zingerman\'s',
  id: '2',
}];
