import { FC, } from 'react';

import DeviceDetector from 'theme/layouts/DeviceDetector';

import MeMobile from './Mobile';

type MeProps = object;

const Me: FC<MeProps> = () => <DeviceDetector
    mobile={<MeMobile/>}
    desktop={<p>Me works</p>}
/>

export default Me;