import users from './users.json';

import { UserDataCLient } from '../../modules/auth/auth.entities';
import { User } from './db.entities';

const checkUserInDb = (userData: UserDataCLient): User | null => {
  const user = users.find(
    ({ phone, email, password }: User) =>
      phone === userData.phone && email === userData.email && password === userData.password,
  );
  return user || null;
};

export default checkUserInDb;
