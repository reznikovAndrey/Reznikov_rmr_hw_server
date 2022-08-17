import { ContentRouting, ContentAPI } from './contentRouting.entities';

const contentRoutingService = (): ContentRouting => ({
  kitty: ContentAPI.kitty,
  profile: ContentAPI.profile,
});

export default contentRoutingService;
