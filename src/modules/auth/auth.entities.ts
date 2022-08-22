export type User = {
  id: string;
  name: string;
  phone: string;
  email: string;
  password: string;
};

export type UserDataCLient = Omit<User, 'id' | 'name'>;
