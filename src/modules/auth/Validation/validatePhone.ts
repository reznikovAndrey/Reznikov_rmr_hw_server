import { phone } from 'phone';

export default (phoneNumber: string) => {
  const phoneRegex = /^[^a-zA-Z]*$/;

  const { isValid: isValidRussia } = phone(phoneNumber, { country: 'RU' });
  const { isValid: isValidMongolia } = phone(phoneNumber, { country: 'MN' });

  return phoneNumber.match(phoneRegex) && (isValidRussia || isValidMongolia);
};
