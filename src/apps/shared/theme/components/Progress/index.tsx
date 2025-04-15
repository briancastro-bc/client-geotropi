import {
    FC,
} from 'react';
import {
    Progress,
    ProgressProps,
} from 'antd';

type CustomProgressProps = object & ProgressProps;

const CustomProgress: FC<CustomProgressProps> = (props) => <Progress {...props}/>;

export default CustomProgress;