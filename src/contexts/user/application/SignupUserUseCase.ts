import {
    inject,
    singleton,
} from 'tsyringe';

import { User, } from 'contexts/shared/domain/models';
import { UseCase, } from 'contexts/shared/domain/UseCase';

import {
    type UserRepository
} from 'user/domain/repositories/UserRepository';

@singleton()
export class SignupUserUseCase implements UseCase<
    Partial<User>,
    User | null
> {
    constructor(
        @inject('UserRepository') private readonly userRepository: UserRepository,
    ) {}

    async execute(user: Partial<User>): Promise<User | null> {
        const createdUser = await this.userRepository.saveUser(user);
        return createdUser;
    }
}