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
