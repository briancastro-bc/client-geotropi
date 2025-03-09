/* eslint-disable react-hooks/exhaustive-deps */
import {
    useRef,
    RefObject,
    useCallback,
    useLayoutEffect,
} from 'react';
import { useAtom, } from 'jotai';

import {
    Application,
    applicationAtom,
} from 'shared/state/atoms';

type LayoutContextState = {
    navbarRef: RefObject<HTMLDivElement | null>;
    bottomNavigationRef: RefObject<HTMLDivElement | null>;
} & Application;

const useLayoutContextState: () => LayoutContextState = () => {
    const timeoutRef = useRef<number | null>(null);
    const navbarRef = useRef<HTMLDivElement | null>(null);
    const bottomNavigationRef = useRef<HTMLDivElement | null>(null);

    const [ application, setApplication, ] = useAtom<Application>(applicationAtom);

    const updateHeight = useCallback(() => {
        timeoutRef.current = window.setTimeout(() => {
            const navbarHeight = navbarRef.current?.offsetHeight || 0;
            const bottomNavigationHeight = bottomNavigationRef.current?.offsetHeight || 0;
            const newHeight = window.innerHeight - (navbarHeight + bottomNavigationHeight);

            setApplication((previousState) => ({
                ...previousState,
                contentHeight: newHeight,
            }));
        }, 300);
    }, [
        setApplication,
        application?.showNavbar,
        application?.showBottomNavigation,
    ]);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(updateHeight);

        if (navbarRef.current) resizeObserver.observe(navbarRef.current);
        if (bottomNavigationRef.current) resizeObserver.observe(bottomNavigationRef.current);

        window.addEventListener('resize', updateHeight);

        updateHeight();

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', updateHeight);
            if (timeoutRef?.current) window.clearTimeout(timeoutRef.current);
        };
    }, [updateHeight]);

    return {
        navbarRef,
        bottomNavigationRef,
        contentHeight: application?.contentHeight,
        showNavbar: application?.showNavbar,
        showBottomNavigation: application?.showBottomNavigation,
    };
};

export default useLayoutContextState;