import fastify from 'fastify';

import authRoutes from '../modules/auth/auth.routes';
import API_URL from '../utils/constants';

const server = fastify();

server.register(authRoutes, { prefix: API_URL });

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
