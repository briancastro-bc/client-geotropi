import {
    FC,
    Children,
} from 'react';

import {
    motion,
    Steps,
} from 'theme/components';
import { StepperProps, } from 'theme/layouts/Stepper';

type StepperMobileProps = StepperProps & object;

const StepperMobile: FC<StepperMobileProps> = ({
    children,
    className,
    showSteps = false,
    currentStep = 0,
    stepComponentProps,
}) => {
    const steps = Children.toArray(children);

    return (
        <motion.div
            className={className ?? ''}
        >
            {showSteps && <Steps {...stepComponentProps}/>}
            {steps?.length && currentStep <= steps?.length - 1 && steps[currentStep]}
        </motion.div>
    );
};

export default StepperMobile;