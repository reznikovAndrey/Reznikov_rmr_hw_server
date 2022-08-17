import { FastifyReply, FastifyRequest } from 'fastify';

import { UserDataCLient } from './auth.entities';

export async function validateBody(request: FastifyRequest<{ Body: UserDataCLient }>, reply: FastifyReply) {
  const { body } = request;

  if (!body.email || !body.password || !body.phone) {
    return reply.badRequest('Check that all fields filled correctly');
  }

  return null;
}
