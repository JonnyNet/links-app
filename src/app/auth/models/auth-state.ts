import { User } from './user';

export interface AuthState {
    user: User | undefined;
    error: string | undefined;
}
