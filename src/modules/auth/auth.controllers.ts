import { randomUUID } from 'crypto';
import { FastifyReply, FastifyRequest } from 'fastify';

import { UserDataCLient } from './auth.entities';

import checkUserInDb from '../../infrastructure/db/db.service';
import { removeSession, setSession } from '../../infrastructure/session/session.service';

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

  if (request.cookies.auth) {
    const { valid, value } = reply.unsignCookie(request.cookies.auth);
    if (valid && value) {
      removeSession(value);
    }
  }

  const sessionToken = randomUUID();
  setSession(sessionToken, { id: user.id, name: user.name });

  return reply.setCookie('auth', sessionToken, { path: '/', signed: true, httpOnly: true }).code(201).send({
    status: 'OK!',
  });
}

export async function logoutUserHandler(request: FastifyRequest, reply: FastifyReply) {
  const { value } = reply.unsignCookie(request.cookies.auth as string);
  removeSession(value as string);

  return reply.clearCookie('auth').code(201).send({ status: 'OK!' });
}
