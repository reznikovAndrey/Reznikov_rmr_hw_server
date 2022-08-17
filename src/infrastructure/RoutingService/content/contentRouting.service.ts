import { ContentRouting, ContentAPI } from './contentRouting.entities';

const contentRoutingService = (): ContentRouting => ({
  kitty: ContentAPI.kitty,
  kittySrc: ContentAPI.kittySrc,
  profile: ContentAPI.profile,
});

export default contentRoutingService;
