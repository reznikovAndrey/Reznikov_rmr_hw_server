import users from './users.json';

import { UserDataCLient, User } from '../../modules/auth/auth.entities';
import { UserSession } from '../session/session.entities';

function isClientData(data: UserDataCLient | UserSession): data is UserDataCLient {
  return (data as UserDataCLient).password !== undefined;
}

const checkUserInDb = (userData: UserDataCLient | UserSession): User | null => {
  if (isClientData(userData)) {
    const user = users.find(
      ({ phone, email, password }: User) =>
        phone === userData.phone && email === userData.email && password === userData.password,
    );
    return user || null;
  }

  const user = users.find(({ id, name }) => id === userData.id && name === userData.name);
  return user || null;
};

export default checkUserInDb;
