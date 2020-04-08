import axios from 'axios';

const verifyCode = async ({ phone, code, onError = () => {} }) => {
  const url = `${process.env.REACT_APP_API_URL}/codes/verify/`;
  return axios.post(url, {
    phone,
    code,
  }).catch((error) => {
    onError(error.response);
    throw error;
  });
}

export default verifyCode;
