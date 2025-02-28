import {
    FC,
} from 'react';
import { Input, } from 'antd';

import BaseField, { BaseFieldProps } from './BaseField';

type CustomPasswordFieldProps = Omit<typeof Input['Password'], '$$typeof'>
    & BaseFieldProps
    & object;

const CustomPasswordField: FC<CustomPasswordFieldProps> = (props) => <BaseField type='Password' {...props}/>;

export default CustomPasswordField;