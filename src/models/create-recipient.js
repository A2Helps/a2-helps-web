import axios from 'axios';

const submitSelections = async ({ allocation, code, token, onError = () => {} }) => {
  const url = `${process.env.REACT_APP_API_URL}/codes/redeem/${code}`;
  return axios({
    method: 'post',
    url,
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: {
      merchants: Object.keys(allocation).map((id) => ({
        id,
        amount: allocation[id],
      }))
    },
  }).catch((error) => {
    onError(error.response);
    throw error;
  });
}

export default submitSelections;
