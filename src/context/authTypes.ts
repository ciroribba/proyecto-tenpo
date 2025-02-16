import { AuthResponse } from '../services/fakeAuthService';

export interface AuthContextType {
  isAuthenticated: boolean;
  user: AuthResponse['data']['user'] | null;
  login: (email: string, password: string) => Promise<AuthResponse>;
  logout: () => void;
  loading: boolean;
}

export const STORAGE_KEY = 'token-tenpo';