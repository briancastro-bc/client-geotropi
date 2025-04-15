import {
    FC,
    Fragment,
} from 'react';
import { Outlet, } from 'react-router-dom';
import { useIsFetching, } from '@tanstack/react-query';

import {
    useCurrentUserQuery,
} from 'shared/hooks';
import { useLayout, } from 'shared/contexts/layout';

import {
    motion,
    Skeleton,
} from 'theme/components';

import Header from 'theme/layouts/Header';
import BottomNav from 'theme/layouts/BottomNav';
import LinearProgress from 'theme/layouts/LinearProgress';

type RootProps = object;

const Root: FC<RootProps> = () => {
    const {
        navbarRef,
        bottomNavigationRef,
        contentHeight,
        showNavbar,
        showBottomNavigation,
    } = useLayout();

    const fetching = useIsFetching();

    const {
        data: user,
    } = useCurrentUserQuery();

    return (
        <Fragment>
            <LinearProgress show={!!fetching}/>
            {/* {showNavbar && <Header ref={navbarRef}/>} */}
            <Header/>
            <motion.main
                // style={{
                //     height: `${contentHeight}px`,
                // }}
                className='overflow-y-auto'
            >
                <Outlet
                    // context={{ user, }}
                />
            </motion.main>
            {/* {showBottomNavigation && <BottomNav ref={bottomNavigationRef}/>} */}
        </Fragment>
    );
};

export default Root;