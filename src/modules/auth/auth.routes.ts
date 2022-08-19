import { FastifyInstance } from 'fastify';

import onRequest from './onRequest.hook';
import preValidation from './preValidation.hook';

import authRoutingService from '../../infrastructure/RoutingService/auth/autoRouting.service';
import { loginUserHandler, logoutUserHandler } from './auth.controllers';

async function authRoutes(server: FastifyInstance) {
  server.post(authRoutingService().login, { preValidation }, loginUserHandler);
  server.post(authRoutingService().logout, { onRequest }, logoutUserHandler);
}

export default authRoutes;
