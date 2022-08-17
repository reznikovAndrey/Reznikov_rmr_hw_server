import { FastifyReply, FastifyRequest } from 'fastify';

import API_URL from '../../utils/constants';
import getKitty from '../../utils/getKitty';

export async function kittyHandler(request: FastifyRequest, reply: FastifyReply) {
  if (!request.cookies.auth) {
    return reply.forbidden('No cookie');
  }

  const { valid, value } = reply.unsignCookie(request.cookies.auth);

  if (!valid || !value) {
    return reply.forbidden('Invalid cookie');
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
    return reply.forbidden('Invalid cookie');
  }

  const { file } = request.params;

  const buffer = await getKitty(file);
  return reply.type('image/png').code(200).send(buffer);
}
