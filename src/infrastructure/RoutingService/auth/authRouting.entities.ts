export enum AuthAPI {
  login = '/login',
  logout = '/logout',
}

export type AuthRouting = {
  login: AuthAPI.login;
  logout: AuthAPI.logout;
};
