import {
    FC,
    PropsWithChildren,
} from 'react';

import { container, } from '@ioc/di';

import { ContainerContext, } from '@Shared/Contexts/ContainerContext';

type ContainerProviderProps = object & Pick<PropsWithChildren, 'children'>;

const ContainerProvider: FC<ContainerProviderProps> = ({
    children
}) => {
    return (
        <ContainerContext.Provider value={container}>
            {children}
        </ContainerContext.Provider>
    );
};

export default ContainerProvider;