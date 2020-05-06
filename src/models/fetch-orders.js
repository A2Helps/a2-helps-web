import axios from 'axios';

const fetchOrders = async ({ token, onError = () => {} }) => {
  const url = `${process.env.REACT_APP_API_URL}/orders?include=order_cards.merchant`;
  return axios({
    method: 'get',
    url,
    headers: {
      'Authorization': `Bearer ${token}`
    },
  }).catch((error) => {
    onError(error.response);
    throw error;
  });
}

export default fetchOrders;
