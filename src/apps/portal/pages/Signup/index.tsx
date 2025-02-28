import { FC, } from 'react';

import DeviceDetector from 'theme/layouts/DeviceDetector';

import SignupMobile from './Mobile';
import SignupDesktop from './Desktop';

type SignupProps = object;

const Signup: FC<SignupProps> = () => {
    return (
        <DeviceDetector
            mobile={<SignupMobile/>}
            desktop={<SignupDesktop/>}
        />
    );
};

export default Signup;