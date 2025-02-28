import ContextFactory from 'shared/contexts/ContextFactory';
import useContainerContextState from 'shared/contexts/container/useContainerContextState';

const {
    Provider,
    useContext,
} = ContextFactory(useContainerContextState);

export {
    Provider as ContainerProvider,
    useContext as useContainer,
};