import router from './router';

import {
    FC,
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

import { store, } from 'shared/state/store';
import { SocketProvider, } from 'shared/contexts/socket';
import { LayoutProvider, } from 'shared/contexts/layout';
import { DatabaseProvider, } from 'shared/contexts/database';
import { ContainerProvider, } from 'shared/contexts/container';

const queryClient = new QueryClient();

type AppProps = object;

const App: FC<AppProps> = () =>
<ContainerProvider>
    <DatabaseProvider>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <SocketProvider>
                    <LazyMotion features={domAnimation}>
                        <StyleProvider layer>
                            <ConfigProvider
                                theme={{
                                    algorithm: theme.defaultAlgorithm,
                                    token: {
                                        colorPrimary: 'var(--color-primary-500)',
                                    },
                                    components: {
                                        Button: {
                                            colorPrimary: 'var(--color-primary-500)',
                                            colorLink: 'var(--color-primary-500)',
                                        },

                                    }
                                }}
                            >
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
                                    <LayoutProvider>
                                        <RouterProvider router={router}/>
                                    </LayoutProvider>
                                </AppProvider>
                            </ConfigProvider>
                        </StyleProvider>
                    </LazyMotion>
                </SocketProvider>
            </QueryClientProvider>
        </Provider>
    </DatabaseProvider>
</ContainerProvider>

export default App;
