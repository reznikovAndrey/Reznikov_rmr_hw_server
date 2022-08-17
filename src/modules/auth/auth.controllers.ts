import { FastifyReply, FastifyRequest } from 'fastify';
import checkUserInDb from '../../infrastructure/db/db.service';

import { UserDataCLient } from './auth.entities';

export async function loginUserHandler(
  request: FastifyRequest<{
    Body: UserDataCLient;
  }>,
  reply: FastifyReply,
) {
  const { body } = request;

  const user = checkUserInDb(body);

  if (!user) {
    return reply.unauthorized('There is no user with such cridentals');
  }

  return reply.setCookie('auth', 'auth', { path: '/', signed: true, httpOnly: true }).code(201).send({
    status: 'OK!',
  });
}

export async function logoutUserHandler(request: FastifyRequest, reply: FastifyReply) {
  if (!request.cookies.auth) {
    return reply.forbidden('No cookie');
  }

  const result = reply.unsignCookie(request.cookies.auth);

  if (!result.valid) {
    return reply.forbidden('Invalid cookie');
  }

  return reply.clearCookie('auth').code(201).send({ status: 'OK!' });
}
