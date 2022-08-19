import { FastifyReply, FastifyRequest } from 'fastify';

import { User } from '../../infrastructure/db/db.entities';
import checkUserInDb from '../../infrastructure/db/db.service';
import { getCurrentUserSession } from '../../infrastructure/session/session.service';
import API_URL from '../../utils/constants';
import getKitty from '../../utils/getKitty';

export async function kittyHandler(request: FastifyRequest, reply: FastifyReply) {
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
  const { file } = request.params;
  const buffer = await getKitty(file);

  return reply.type('image/png').code(200).send(buffer);
}

export async function profileHandler(request: FastifyRequest, reply: FastifyReply) {
  const { value } = reply.unsignCookie(request.cookies.auth as string);
  const userSession = getCurrentUserSession(value as string);
  const user = checkUserInDb(userSession);

  return reply.code(200).send({
    data: {
      id: (user as User).id,
      name: (user as User).name,
      email: (user as User).email,
      phone: (user as User).phone,
    },
  });
}
