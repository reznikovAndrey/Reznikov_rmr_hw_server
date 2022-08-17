import { FastifyReply, FastifyRequest } from 'fastify';
import checkUserInDb from '../../infrastructure/db/db.service';
import { getCurrentUserSession } from '../../infrastructure/session/session.service';

import API_URL from '../../utils/constants';
import getKitty from '../../utils/getKitty';

export async function kittyHandler(request: FastifyRequest, reply: FastifyReply) {
  if (!request.cookies.auth) {
    return reply.unauthorized('No cookie');
  }

  const { valid, value } = reply.unsignCookie(request.cookies.auth);

  if (!valid || !value) {
    return reply.unauthorized('Invalid cookie');
  }

  return reply.code(200).send({
    data: {
      src: `/${API_URL}/images/kitty.jpeg`,
    },
  });
}

export async function kittySrcHandler(
  request: FastifyRequest<{
    Params: {
      file: string;
    };
  }>,
  reply: FastifyReply,
) {
  if (!request.cookies.auth) {
    return reply.forbidden('No cookie');
  }

  const { valid, value } = reply.unsignCookie(request.cookies.auth);

  if (!valid || !value) {
    return reply.unauthorized('Invalid cookie');
  }

  const { file } = request.params;

  const buffer = await getKitty(file);
  return reply.type('image/png').code(200).send(buffer);
}

export async function profileHandler(request: FastifyRequest, reply: FastifyReply) {
  if (!request.cookies.auth) {
    return reply.unauthorized('No cookie');
  }

  const { valid, value } = reply.unsignCookie(request.cookies.auth);

  if (!valid || !value) {
    return reply.unauthorized('Invalid cookie');
  }

  const userSession = getCurrentUserSession(value);
  const user = checkUserInDb(userSession);

  if (!user) {
    return reply.unauthorized('Invalid session');
  }

  return reply.code(200).send({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
  });
}
