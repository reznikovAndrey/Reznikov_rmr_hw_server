export enum ContentAPI {
  kitty = '/kitty',
  profile = '/profile',
}

export type ContentRouting = {
  kitty: ContentAPI.kitty;
  profile: ContentAPI.profile;
};
