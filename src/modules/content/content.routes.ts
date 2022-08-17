import { FastifyInstance } from 'fastify';

import contentRoutingService from '../../infrastructure/RoutingService/content/contentRouting.service';
import { kittyHandler, kittySrcHandler, profileHandler } from './content.controllers';

async function contentRoutes(server: FastifyInstance) {
  server.get(contentRoutingService().kitty, kittyHandler);
  server.get(contentRoutingService().kittySrc, kittySrcHandler);
  server.get(contentRoutingService().profile, profileHandler);
}

export default contentRoutes;
