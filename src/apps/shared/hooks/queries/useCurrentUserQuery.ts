import {
    useQuery,
    UseQueryResult,
} from '@tanstack/react-query';
import { secondsToMilliseconds, } from 'date-fns';

import { User, } from 'contexts/shared/domain/models';

import { GetCurrentUserUseCase, } from 'user/application/GetCurrentUserUseCase';

import { useDatabase, } from 'shared/contexts/database';
import { useContainer, } from 'shared/contexts/container';

export const useCurrentUserQuery: () => UseQueryResult<User | null, Error> = () => {
    const { put, } = useDatabase();
    const { resolveDependency, } = useContainer();

    const useCase = resolveDependency(GetCurrentUserUseCase);

    const query = useQuery({
        queryKey: ['currentUser',],
        queryFn: async () => {
            // const user = await useCase.execute();
            // if (!user) return null;

            // await put('users', user, user?.ID);

            // return user;
            return null;
        },
        retry: 1,
        retryDelay: secondsToMilliseconds(5),
    });

    return query;
}