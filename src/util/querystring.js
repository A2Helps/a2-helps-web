export const querystringToObj = (querystring) => {
  let baseStr = querystring;
  if (querystring[0] === '?') {
    baseStr = querystring.slice(1);
  }

  return baseStr.split('&').reduce((acc, keyVal) => {
    const [key, val] = keyVal.split('=');
    acc[key] = val;
    return acc;
  }, {});
};
