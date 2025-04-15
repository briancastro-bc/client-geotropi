import { FC, } from 'react';
import { Steps, StepsProps, } from 'antd';

type CustomStepsProps = StepsProps & object;

const CustomSteps: FC<CustomStepsProps> = (props) => {
    return (
        <Steps
            direction='horizontal'
            {...props}
        />
    );
};

export default CustomSteps;