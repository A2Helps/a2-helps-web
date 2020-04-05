import axios from 'axios';

const verifyCode = async ({ phone, code }) => {
  const url = `${process.env.REACT_APP_API_URL}/codes/verify/`;
  return axios.post(url, {
    phone,
    code,
  });
}

export default verifyCode;
