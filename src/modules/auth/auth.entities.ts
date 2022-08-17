import { User } from '../../infrastructure/db/db.entities';

export type UserDataCLient = Omit<User, 'id' | 'name'>;
