import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

import { UserDataCLient } from './auth.entities';
import validateEmail from './Validation/validateEmail';
import validatePassword from './Validation/validatePassword';
import validatePhone from './Validation/validatePhone';

function preValidation(
  request: FastifyRequest<{ Body: UserDataCLient }>,
  reply: FastifyReply,
  done: (err?: FastifyError) => void,
) {
  const {
    body: { email, password, phone },
  } = request;

  if (!email || !password || !phone) {
    reply.badRequest('Check that all fields filled correctly');
  }

  const isEmailValid = validateEmail(email);
  if (!isEmailValid) {
    reply.badRequest('Incorrect email');
  }

  const isPasswordValid = validatePassword(password);
  if (!isPasswordValid) {
    reply.badRequest('Incorrect password');
  }

  const isValidPhone = validatePhone(phone);
  if (!isValidPhone) {
   reply.badRequest('Incorrect phone format. Allowed only Mongolia (+976) and Russia (+7).');
  }

  done()
}

export default preValidation;