import ContextFactory from 'shared/contexts/ContextFactory';
import useWorkerContextState from 'shared/contexts/worker/useWorkerContextState';

const {
    Provider,
    useContext,
} = ContextFactory(useWorkerContextState);

export {
    Provider as WorkerProvider,
    useContext as useWorker,
};