export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegistration extends UserLogin {
  id?: number;
  firstName: string;
  lastName: string;
  gender: string;
  mobile: string;
  userRole: string;
  imageUrl: string;
}
