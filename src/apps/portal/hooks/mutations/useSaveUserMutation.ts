import { useMemo, } from 'react';
import {
    useMutation,
    UseMutationResult,
} from '@tanstack/react-query';
import { useTranslation, } from 'react-i18next';
import { useNavigate, } from 'react-router-dom';

import { User, } from 'contexts/shared/domain/models';
import { SignupUserUseCase, } from 'contexts/user/application/SignupUserUseCase';

import { useAppMessage, } from 'shared/hooks';
import { useContainer, } from 'shared/contexts/container';

export const useSaveUserMutation: () => UseMutationResult<User | null, Error, Partial<User>> = () => {
    const { t, } = useTranslation();

    const navigate = useNavigate();

    const message = useAppMessage();

    const {
        resolveDependency,
    } = useContainer();

    const useCase = useMemo(
        () => resolveDependency(SignupUserUseCase),
        [resolveDependency,],
    );

    const successMutation = (data: User | null) => {
        if (!data) {
            console.error('something went wrong');
            return;
        }

        message.success({
            content: t('success.done'),
        });

        navigate('/me');
    };

    const errorMutation = (error: Error) => {
        console.error(error);
        message.error({
            content: t('errors.default'),
        });
    };

    const mutation = useMutation({
        mutationKey: ['saveUser',],
        mutationFn: (user: Partial<User>) => useCase.execute(user),
        onSuccess: successMutation,
        onError: errorMutation,
    });

    return mutation;
}