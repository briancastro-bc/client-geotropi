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
export class GetCurrentUserUseCase implements UseCase<
    undefined,
    User | null
> {
    constructor(
        @inject('UserRepository') private readonly userRepository: UserRepository,
    ) {}

    async execute(): Promise<User | null> {
        const result = await this.userRepository.getCurrentUser();
        return result;
    }
}