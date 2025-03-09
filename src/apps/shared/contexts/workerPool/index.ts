import ContextFactory from 'shared/contexts/ContextFactory';
import useWorkerPoolContextState from 'shared/contexts/workerPool/useWorkerPoolContextState';

const {
    Provider,
    useContext,
} = ContextFactory(useWorkerPoolContextState);

export {
    Provider as WorkerPoolProvider,
    useContext as useWorkerPool,
};