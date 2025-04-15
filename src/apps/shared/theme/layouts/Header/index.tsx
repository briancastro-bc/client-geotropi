import {
    FC,
    ComponentProps,
} from 'react';

import DeviceDetector from 'theme/layouts/DeviceDetector';

import HeaderMobile from './Mobile';
import HeaderDesktop from './Desktop';

export type HeaderProps = ComponentProps<'header'> & object;

const Header: FC<HeaderProps> = (props) => <DeviceDetector
    mobile={<HeaderMobile {...props}/>}
    desktop={<HeaderDesktop {...props}/>}
/>

export default Header;