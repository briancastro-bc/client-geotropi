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
            .then(component => ({ Component: component.default, })),
        children: [
            {
                id: 'landing',
                path: '',
                lazy: () => import('portal/pages/Landing')
                    .then(component => ({ Component: component.default, })),
            },
            {
                id: 'me',
                path: 'me',
                lazy: () => import('portal/pages/Me')
                    .then(component => ({ Component: component.default, })),
            }
        ],
    },
    {
        id: 'signup',
        path: 'signup',
        // errorElement: <Error/>,
        hydrateFallbackElement: <FullscreenSkeleton/>,
        lazy: () => import('portal/pages/Signup')
            .then(component => ({ Component: component.default, })),
    },
    {
        path: 'test',
        element: <FullscreenSkeleton/>,
    },
    {
        id: 'not-found',
        path: '*',
        hydrateFallbackElement: <FullscreenSkeleton/>,
        lazy: () => import('theme/pages/NotFound')
            .then(component => ({ Component: component.default, })),
    }
];

const router = createBrowserRouter(routes);

export default router;