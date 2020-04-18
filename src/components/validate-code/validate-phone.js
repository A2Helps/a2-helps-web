export const validatePhone = (input) => {
  const clean = cleanPhone(input);
  if (!clean)
    return false;
  return clean.match(/\d/g).length === 11;
};
// dont allow other country codes
const cleanPhone = (input) => {
  const cleaned = ('' + input).replace(/\D/g, '');
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return [match[1], match[2], match[3], match[4]].join('');
  }
  return input.replace(/[^0-9.]+/g, '');
};
