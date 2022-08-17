import * as EmailValidator from 'email-validator';

export default (email: string) => EmailValidator.validate(email);
