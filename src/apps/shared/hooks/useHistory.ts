import { formatISO, } from 'date-fns';
import {
    useEffect,
    useCallback,
} from 'react';
import {
    useLocation,
    useNavigate,
    NavigateFunction,
} from 'react-router-dom';

import { History, } from 'contexts/shared/domain/models';

import { useDatabase, } from 'shared/contexts/database';

type HistoryResult = {
    navigateTo: NavigateFunction;
    navigateToPrevious: () => void | Promise<void>;
};

export const useHistory: () => HistoryResult = () => {
    const {
        put,
        database,
    } = useDatabase();

    const navigate = useNavigate();
    const location = useLocation();

    const addToHistory = useCallback(async (element: History) => {
        await put('history', {
            ...element,
            createdAt: formatISO(new Date()),
            modifiedAt: formatISO(new Date()),
        });
    }, [put,]);

    const allHistoryFromNow = useCallback(async () => {
        const history = await database.history
            .where('createdAt')
            .belowOrEqual(formatISO(new Date()))
            .sortBy('createdAt');
        return history;
    }, [database,]);

    const navigateTo = useCallback(
        (to, options) => navigate(to, options),
        [navigate,]
    ) as HistoryResult['navigateTo'];

    const previous = useCallback(
        async () => {
            const history = await allHistoryFromNow();
            const lastHistoryItem = history
                ?.filter(h => h?.path !== location?.pathname)
                ?.at(-1);
            if (!lastHistoryItem) return navigateTo('..');

            const {
                path,
                hash,
                params,
            } = lastHistoryItem;

            return navigateTo({
                pathname: path,
                hash: hash || '',
                search: Array.isArray(params) ? params.join('&') : params,
            });
        },
        [
            navigateTo,
            allHistoryFromNow,
            location.pathname,
        ],
    ) as HistoryResult['navigateToPrevious'];

    useEffect(() => {
        const syncHistory = async () => {
            const {
                key,
                hash,
                search,
                pathname,
            } = location;

            const historyElement: History = {
                key,
                hash,
                params: search,
                path: pathname,
                url: window?.location?.hostname,
            };

            const [ count, history, ] = await Promise.all([
                database.history.count(),
                allHistoryFromNow(),
            ]);

            if (count < 20) {
                await addToHistory(historyElement);
                return;
            }

            const last = history.at(0);
            if (!last) {
                await addToHistory(historyElement);
                return;
            }

            await Promise.all([
                database.history.delete(last?.key),
                addToHistory(historyElement),
            ]);
        }

        if (location) syncHistory()
            .catch(err => console.error('Something went wrong in history', JSON.stringify(err)));
    }, [
        database,
        location,
        addToHistory,
        allHistoryFromNow,
    ]);

    return {
        navigateTo,
        navigateToPrevious: previous,
    };
};