import axios from 'axios';

const optIn = async ({
  onError = () => {},
  name_first,
  name_last,
  phone,
  email,
}) => {
  const url = `${process.env.REACT_APP_API_URL}/recipients`;
  return axios({
    method: 'post',
    url,
    data: {
      name_first,
      name_last,
      phone,
      email,
    },
  }).catch((error) => {
    onError(error.response);
    throw error;
  });
}

export default optIn;
