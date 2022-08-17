import fastify from 'fastify';
import cookie from '@fastify/cookie';
import type { FastifyCookieOptions } from '@fastify/cookie';
import * as cs from 'cookie-signature';

import authRoutes from '../modules/auth/auth.routes';
import API_URL from '../utils/constants';

const server = fastify();

// plugins
server.register(import('@fastify/sensible'));

// cookies
server.register(cookie, {
  secret: cs.sign('dev', 'devSecret'),
  parseOptions: {},
} as FastifyCookieOptions);

// routes
server.register(authRoutes, { prefix: API_URL });

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
