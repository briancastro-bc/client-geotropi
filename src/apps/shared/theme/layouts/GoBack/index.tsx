import { FC, } from 'react';

import DeviceDetector from 'theme/layouts/DeviceDetector';

import GoBackMobile from './Mobile';

export type GoBackProps = object;

const GoBack: FC<GoBackProps> = (props) => <DeviceDetector
    mobile={<GoBackMobile {...props}/>}
    desktop={<p>Atras</p>}
/>

export default GoBack;