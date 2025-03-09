import { ComponentProps, FC, } from 'react';

import DeviceDetector from 'theme/layouts/DeviceDetector';

import NavbarMobile from './Mobile';

export type NavbarProps = ComponentProps<'header'> & object;

const Navbar: FC<NavbarProps> = (props) => <DeviceDetector
    mobile={<NavbarMobile {...props}/>}
    desktop={<p>Navbar desktop</p>}
/>

export default Navbar;