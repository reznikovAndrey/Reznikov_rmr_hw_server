import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

function onRequest(request: FastifyRequest, reply: FastifyReply, done: (err?: FastifyError) => void) {
  if (!request.cookies.auth) {
    reply.unauthorized('No cookie');
  }

  const { valid, value } = reply.unsignCookie(request.cookies.auth as string);

  if (!valid || !value) {
    reply.unauthorized('Invalid cookie');
  }

  done();
}

export default onRequest;
