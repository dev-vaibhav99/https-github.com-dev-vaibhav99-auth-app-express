export interface UserRegistration {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  mobile: string;
  password: string;
  userRole: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
