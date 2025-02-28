import { FC, } from 'react';

import DeviceDetector from 'theme/layouts/DeviceDetector';

import LandingMobile from './Mobile';
import LandingDesktop from './Desktop';

type LandingProps = object;

export const Landing: FC<LandingProps> = () => {
    return (
        <DeviceDetector
            mobile={<LandingMobile/>}
            desktop={<LandingDesktop/>}
        />
    );
};

export default Landing;