import ContextFactory from 'shared/contexts/ContextFactory';
import useLayoutContextState from 'shared/contexts/layout/useLayoutContextState';

const {
    Provider,
    useContext,
} = ContextFactory(useLayoutContextState);

export {
    Provider as LayoutProvider,
    useContext as useLayout,
};