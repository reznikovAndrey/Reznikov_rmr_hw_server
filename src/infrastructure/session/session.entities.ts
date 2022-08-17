import { User } from '../db/db.entities';

export type UserSession = Pick<User, 'id' | 'name'>;

type SessionToken = string;

export type SessionStorage = {
  [key in SessionToken]: UserSession;
};
