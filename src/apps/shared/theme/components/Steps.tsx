import { FC, } from 'react';
import { Steps, StepsProps, } from 'antd';

type CustomStepsProps = StepsProps & object;

const CustomSteps: FC<CustomStepsProps> = (props) => {
    return (
        <Steps {...props}/>
    );
};

export default CustomSteps;