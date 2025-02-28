import ContextFactory from 'shared/contexts/ContextFactory';
import useSocketContextState from 'shared/contexts/socket/useSocketContextState';

const {
    Provider,
    useContext,
} = ContextFactory(useSocketContextState);

export {
    Provider as SocketProvider,
    useContext as useSocket,
};