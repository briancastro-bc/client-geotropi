import { User, } from 'contexts/shared/domain/models';

export interface UserRepository {
    saveUser(user: Partial<User>): Promise<User | null>;
}