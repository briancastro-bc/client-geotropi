import { atom, } from 'jotai';

export type Application = {
    contentHeight: number;
    showNavbar: boolean;
    showBottomNavigation: boolean;
};

export const applicationAtom = atom<Application>({
    contentHeight: window.innerHeight,
    showNavbar: true,
    showBottomNavigation: true,
});