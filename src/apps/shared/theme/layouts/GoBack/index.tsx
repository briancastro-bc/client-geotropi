import {
    FC,
    ComponentProps,
} from 'react';

import DeviceDetector from 'theme/layouts/DeviceDetector';

import GoBackMobile from './Mobile';

export type GoBackProps = ComponentProps<'div'> & {
    showText?: boolean;
};

const GoBack: FC<GoBackProps> = (props) => <DeviceDetector
    mobile={<GoBackMobile ref={props.ref} {...props}/>}
    desktop={<p>Atras</p>}
/>

export default GoBack;