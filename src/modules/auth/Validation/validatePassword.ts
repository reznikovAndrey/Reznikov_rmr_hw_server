export default (password: string) => {
  const passwordRegex = /^[a-zA-Z\d]*$/;

  return password.match(passwordRegex) && password.length >= 4;
};
