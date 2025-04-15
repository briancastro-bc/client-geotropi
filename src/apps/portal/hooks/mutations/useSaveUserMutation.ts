import {
    useMutation,
    UseMutationResult,
} from '@tanstack/react-query';
import { useNavigate, } from 'react-router-dom';

import { User, } from 'contexts/shared/domain/models';

import { SignupUserUseCase, } from 'user/application/SignupUserUseCase';

import { useContainer, } from 'shared/contexts/container';

export const useSaveUserMutation: () => UseMutationResult<User | null, Error, Partial<User>> = () => {
    const navigate = useNavigate();

    const {
        resolveDependency,
    } = useContainer();

    const useCase = resolveDependency(SignupUserUseCase);

    const successMutation = (data: User | null) => {
        if (!data) {
            console.error('something went wrong');
            return;
        }

        navigate('/me');
    };

    const errorMutation = (error: Error) => {
        console.error(error);
    };

    const mutation = useMutation({
        mutationKey: ['saveUser',],
        mutationFn: (user: Partial<User>) => useCase.execute(user),
        onSuccess: successMutation,
        onError: errorMutation,
    });

    return mutation;
}