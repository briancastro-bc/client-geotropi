import ContextFactory from 'shared/contexts/ContextFactory';
import useDatabaseContextState from 'shared/contexts/database/useDatabaseContextState';

const {
    Provider,
    useContext,
} = ContextFactory(useDatabaseContextState);

export {
    Provider as DatabaseProvider,
    useContext as useDatabase,
};