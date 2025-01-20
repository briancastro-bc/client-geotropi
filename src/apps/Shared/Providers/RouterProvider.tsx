import { FC, } from 'react';
import {
    RouteObject,
    createBrowserRouter,
    RouterProvider as Router,
} from 'react-router-dom';

import Error from '@Shared/Pages/Error';

const routes: Array<RouteObject> = [
    {
        id: 'root',
        errorElement: <Error/>,
        // hydrateFallbackElement: ,
        children: [
            {
                id: 'landing',
                path: '',
                lazy: () => import('@/apps/Public/pages/Landing.tsx')
                    .then(component => ({ Component: component.default, })),
            },
        ],
    },
    {
        id: 'not-found',
        path: '*',
        lazy: () => import('@Shared/Pages/NotFound.tsx')
            .then(component => ({ Component: component.default, })),
    }
];

const router = createBrowserRouter(routes);

type RouterProviderProps = object;

const RouterProvider: FC<RouterProviderProps> = () => {
    return (
        <Router router={router}/>
    );
};

export default RouterProvider;