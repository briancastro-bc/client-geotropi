import {
    FC,
    useEffect,
    useCallback,
} from 'react';
import { Outlet, } from 'react-router-dom';
import { useIsFetching, } from '@tanstack/react-query';

import {
    useWorker,
    useCurrentUserQuery,
} from 'shared/hooks';
import { useLayout, } from 'shared/contexts/layout';

import {
    motion,
} from 'theme/components';

import Navbar from 'theme/layouts/Navbar';
import BottomNav from 'theme/layouts/BottomNav';

const WORKER_URL = new URL(
    'src/workers/main',
    `${location.origin}${import.meta.env.BASE_URL}`
);

type RootProps = object;

const Root: FC<RootProps> = () => {
    const {
        navbarRef,
        bottomNavigationRef,
        contentHeight,
        showNavbar,
        showBottomNavigation,
    } = useLayout();

    const mainWorkerInit = useCallback(
        () => new Worker(
            new URL(WORKER_URL)
        ),
        [],
    );

    const onWorkerMessage: (message: MessageEvent<WorkerMessage>) => void = useCallback(
        ({ data: payload, }) => {
            const {
                type,
                data,
            } = payload;
        },
        [],
    );

    const mainWorker = useWorker(
        WORKER_URL.toString(),
        mainWorkerInit,
        onWorkerMessage,
    );

    const fetching = useIsFetching();

    const {
        data: user,
    } = useCurrentUserQuery();

    useEffect(() => {
        if (mainWorker?.current) mainWorker?.current?.postMessage({
            type: 'test',
            data: 'asjdkalsjd',
        } as WorkerMessage);
    }, [mainWorker,]);

    return (
        <motion.div className='relative min-h-screen flex flex-col overflow-x-hidden'>
            {!!fetching && <p>Fetching...</p>}
            {showNavbar && <Navbar ref={navbarRef}/>}
            <motion.main
                style={{
                    height: `${contentHeight}px`,
                }}
                className='overflow-y-auto'
            >
                <Outlet
                    context={{
                        user,
                    }}
                />
            </motion.main>
            {showBottomNavigation && <BottomNav ref={bottomNavigationRef}/>}
        </motion.div>
    );
};

export default Root;