import { useContext, } from 'react';

import { DependencyContainer, } from '@ioc/di';

import { ContainerContext, } from '@Shared/Contexts/ContainerContext';

export const useContainer: () => DependencyContainer = () => {
    const container = useContext(ContainerContext);
    return container;
};