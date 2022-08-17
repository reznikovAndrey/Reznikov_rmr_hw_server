export enum ContentAPI {
  kitty = '/kitty',
  kittySrc = '/images/:file',
  profile = '/profile',
}

export type ContentRouting = {
  kitty: ContentAPI.kitty;
  kittySrc: ContentAPI.kittySrc;
  profile: ContentAPI.profile;
};
