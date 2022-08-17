import { FastifyInstance } from 'fastify';

import authRoutingService from '../../infrastructure/RoutingService/auth/autoRouting.service';
import { loginUserHandler } from './auth.controllers';
import { validateBody } from './auth.validation';

async function authRoutes(server: FastifyInstance) {
  server.post(authRoutingService().login, { preValidation: validateBody }, loginUserHandler);
}

export default authRoutes;
