import { FastifyInstance } from 'fastify';

import { kittyHandler, kittySrcHandler, profileHandler } from './content.controllers';

import contentRoutingService from '../../infrastructure/RoutingService/content/contentRouting.service';
import onRequest from '../auth/onRequest.hook';

async function contentRoutes(server: FastifyInstance) {
  server.get(contentRoutingService().kitty, { onRequest }, kittyHandler);
  server.get<{
    Params: { file: string };
  }>(contentRoutingService().kittySrc, { onRequest }, kittySrcHandler);
  server.get(contentRoutingService().profile, { onRequest }, profileHandler);
}

export default contentRoutes;
