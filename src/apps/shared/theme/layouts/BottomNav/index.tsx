import {
    FC,
    ComponentProps,
} from 'react';

import DeviceDetector from 'theme/layouts/DeviceDetector';

import BottomNavMobile from './Mobile';
import BottomNavDesktop from './Desktop';

export type BottomNavProps = ComponentProps<'nav'> & object;

const BottomNav: FC<BottomNavProps> = (props) => <DeviceDetector
    mobile={<BottomNavMobile {...props}/>}
    desktop={<BottomNavDesktop {...props}/>}
/>

export default BottomNav;