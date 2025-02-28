import {
    inject,
    injectable,
} from 'tsyringe';

import { User, } from 'contexts/shared/domain/models';
import {
    type HttpRepository,
} from 'contexts/shared/domain/repositories/HttpRepository';
import { UrlBuilder, } from 'contexts/shared/infrastructure/builders/UrlBuilder';

import { UserRepository, } from 'user/domain/repositories/UserRepository';

@injectable()
export class HttpUserRepository implements UserRepository {
    constructor(
        @inject('HttpRepository') private readonly httpRepository: HttpRepository,
    ) {}

    async saveUser(user: Partial<User>): Promise<User | null> {
        const endpoint = new UrlBuilder(import.meta.env.VITE_BASE_URL, 'api/users')
            .build();

        const response = await this.httpRepository.post<User>(endpoint, user, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return response;
    }
}