import { Auth, AuthError, User } from '@firebase/auth';

export interface IBaeFunctionAuth {
  auth: Auth;
  onAuth: (user: User) => void;
  onError: (error: AuthError) => void;
}
