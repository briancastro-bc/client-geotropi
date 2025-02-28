import { FC, } from 'react';
import { Outlet, } from 'react-router-dom';

type RootProps = object;

const Root: FC<RootProps> = () => {
    return (
        <main className='h-screen overflow-hidden'>
            <Outlet/>
        </main>
    );
};

export default Root;