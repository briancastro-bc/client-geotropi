import {
    FC,
    ComponentPropsWithRef,
} from 'react';
import { StepsProps, } from 'antd';

import DeviceDetector from 'theme/layouts/DeviceDetector';

import StepperMobile from './Mobile';

export type StepperProps = ComponentPropsWithRef<'div'> & {
    currentStep: number;
    showSteps?: boolean;
    stepComponentProps?: StepsProps;
};

const Stepper: FC<StepperProps> = (props) => {
    return (
        <DeviceDetector
            mobile={<StepperMobile {...props}/>}
            desktop={<p>stepper</p>}
        />
    );
};

export default Stepper;