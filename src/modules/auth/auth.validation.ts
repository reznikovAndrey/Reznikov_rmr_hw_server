import { FastifyReply, FastifyRequest } from 'fastify';

import { UserDataCLient } from './auth.entities';
import validateEmail from './Validation/validateEmail';
import validatePassword from './Validation/validatePassword';
import validatePhone from './Validation/validatePhone';

export async function validateBody(request: FastifyRequest<{ Body: UserDataCLient }>, reply: FastifyReply) {
  const {
    body: { email, password, phone },
  } = request;

  if (!email || !password || !phone) {
    return reply.badRequest('Check that all fields filled correctly');
  }

  const isEmailValid = validateEmail(email);
  if (!isEmailValid) {
    return reply.badRequest('Incorrect email');
  }

  const isPasswordValid = validatePassword(password);
  if (!isPasswordValid) {
    return reply.badRequest('Incorrect password');
  }

  const isValidPhone = validatePhone(phone);
  if (!isValidPhone) {
    return reply.badRequest('Incorrect phone format. Allowed only Mongolia (+976) and Russia (+7).');
  }

  return null;
}
