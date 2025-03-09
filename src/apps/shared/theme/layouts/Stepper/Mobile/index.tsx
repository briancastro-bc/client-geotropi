import {
    FC,
    Children,
    Fragment,
} from 'react';

import {
    Steps,
} from 'theme/components';
import { StepperProps, } from 'theme/layouts/Stepper';

type StepperMobileProps = StepperProps & object;

const StepperMobile: FC<StepperMobileProps> = ({
    children,
    showSteps = false,
    currentStep = 0,
    stepComponentProps,
}) => {
    const steps = Children.toArray(children);

    return (
        <Fragment>
            {showSteps && <Steps {...stepComponentProps}/>}
            {steps?.length && currentStep <= steps?.length - 1 && steps[currentStep]}
        </Fragment>
    );
};

export default StepperMobile;