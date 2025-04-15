import {
    RouteObject,
    createBrowserRouter,
} from 'react-router-dom';

import Error from 'theme/pages/Error';
import FullscreenSkeleton from 'theme/layouts/FullscreenSkeleton';

const routes: Array<RouteObject> = [
    {
        id: 'root',
        errorElement: <Error/>,
        hydrateFallbackElement: <FullscreenSkeleton/>,
        lazy: () => import('theme/pages/Root')
            .then(module => ({ Component: module.default, })),
        children: [
            {
                id: 'landing',
                path: '',
                lazy: () => import('portal/pages/Landing')
                    .then(module => ({ Component: module.default, })),
            },
            {
                id: 'me',
                path: 'me',
                lazy: () => import('portal/pages/Me')
                    .then(module => ({ Component: module.default, })),
            },
            {
                id: 'new',
                path: 'new',
                lazy: () => import('portal/pages/NewWorkspace')
                    .then(module => ({ Component: module.default, })),
            },
            {
                id: 'not-found',
                path: '*',
                hydrateFallbackElement: <FullscreenSkeleton/>,
                lazy: () => import('theme/pages/NotFound')
                    .then(module => ({ Component: module.default, })),
            }
        ],
    },
    {
        id: 'signup',
        path: 'signup',
        errorElement: <Error/>,
        hydrateFallbackElement: <FullscreenSkeleton/>,
        lazy: () => import('portal/pages/Signup')
            .then(component => ({ Component: component.default, })),
    },
    {
        path: 'test',
        element: <FullscreenSkeleton/>,
    },
];

const router = createBrowserRouter(routes);

export default router;