import { FastifyInstance } from 'fastify';

import authRoutingService from '../../infrastructure/RoutingService/auth/autoRouting.service';
import { loginUserHandler } from './auth.controllers';

async function authRoutes(server: FastifyInstance) {
  server.post(authRoutingService().login, loginUserHandler);
}

export default authRoutes;
