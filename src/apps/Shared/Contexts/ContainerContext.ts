import { createContext, } from 'react';

import { DependencyContainer, } from '@ioc/di';

const ContainerContext = createContext<DependencyContainer>(undefined as unknown as DependencyContainer);
ContainerContext.displayName = 'ContainerContext';

export {
    ContainerContext,
};