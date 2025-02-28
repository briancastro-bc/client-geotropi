import router from './router';

import {
    FC,
    useCallback,
    useEffect,
} from 'react'
import {
    theme,
    ConfigProvider,
    App as AppProvider,
} from 'antd';
import {
    LazyMotion,
    domAnimation,
} from 'motion/react';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { Provider, } from 'jotai';
import { RouterProvider, } from 'react-router-dom';
import { StyleProvider, } from '@ant-design/cssinjs';

import {
    useWorker,
} from 'shared/hooks';
import { store, } from 'shared/state/store';
import { SocketProvider, } from 'shared/contexts/socket';
import { DatabaseProvider, } from 'shared/contexts/database';
import { ContainerProvider, } from 'shared/contexts/container';

const queryClient = new QueryClient();

type AppProps = object;

const App: FC<AppProps> = () => {
    const mainWorkerInit = useCallback(
        () => new Worker(
            new URL(
                'apps/shared/workers/main.worker.ts',
                import.meta.url,
            ),
        ),
        [],
    );

    const onWorkerMessage = useCallback(
        ({ data, }: { data: any; }) => {
            console.log('worker data', data);
        },
        []
    );

    const {
        current: mainWorker,
    } = useWorker(
        mainWorkerInit,
        onWorkerMessage,
    );

    useEffect(() => {
        mainWorker?.postMessage('asdasd');
    }, [mainWorker,]);

    return (
        <ContainerProvider>
            <DatabaseProvider>
                <Provider store={store}>
                    <QueryClientProvider client={queryClient}>
                        <SocketProvider>
                            <LazyMotion features={domAnimation}>
                                <StyleProvider layer>
                                    <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm, }}>
                                        <AppProvider
                                            message={{
                                                maxCount: 5,
                                                duration: 5,
                                            }}
                                            notification={{
                                                maxCount: 3,
                                                placement: 'topRight',
                                                duration: 5,
                                                showProgress: true,
                                                pauseOnHover: true,
                                            }}
                                        >
                                            <RouterProvider router={router}/>
                                        </AppProvider>
                                    </ConfigProvider>
                                </StyleProvider>
                            </LazyMotion>
                        </SocketProvider>
                    </QueryClientProvider>
                </Provider>
            </DatabaseProvider>
        </ContainerProvider>
    );
};

export default App;
