import { User } from '../../modules/auth/auth.entities';

export type UserSession = Pick<User, 'id' | 'name'>;

type SessionToken = string;

export type SessionStorage = {
  [key in SessionToken]: UserSession;
};
