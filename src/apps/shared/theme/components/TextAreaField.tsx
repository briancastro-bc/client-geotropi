import { FC, } from 'react';
import { Input, } from 'antd';

import BaseField, { BaseFieldProps, } from './BaseField';

type CustomTextAreaFieldProps = Omit<typeof Input['TextArea'], '$$typeof'>
    & BaseFieldProps
    & object;

const CustomTextAreaField: FC<CustomTextAreaFieldProps> = (props) => <BaseField
    type='TextArea'
    allowClear
    classNames={{
        textarea: 'font-primary-alt',
    } as any}
    {...props}
/>

export default CustomTextAreaField;