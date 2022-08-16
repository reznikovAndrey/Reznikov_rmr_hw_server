import { AuthRouting, AuthAPI } from './authRouting.entities';

const authRoutingService = (): AuthRouting => ({
  login: AuthAPI.login,
  logout: AuthAPI.logout,
});

export default authRoutingService;
