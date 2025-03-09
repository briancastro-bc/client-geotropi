import { useEffect, } from 'react';
import { useSetAtom, } from 'jotai';

import {
    Application,
    applicationAtom,
} from 'shared/state/atoms';

export const useSetLayout: (layout: Omit<Application, 'contentHeight'>) => void = (layout) => {
    const setApplication = useSetAtom(applicationAtom);

    useEffect(() => {
        const {
            showNavbar,
            showBottomNavigation,
        } = layout;

        setApplication((previousState) => ({
            ...previousState,
            showNavbar: showNavbar,
            showBottomNavigation: showBottomNavigation,
        }));

        return () => {
            setApplication((previousState) => ({
                ...previousState,
                showNavbar: !showNavbar,
                showBottomNavigation: !showBottomNavigation,
            }));
        };
    }, [layout, setApplication,])
}