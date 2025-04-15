import {
    FC,
    memo,
} from 'react';
import { Form, FormItemProps, } from 'antd';

type CustomFormItemProps = {
    label?: FormItemProps['label'];
    required?: FormItemProps['required'];
    children?: FormItemProps['children'];
    direction?: FormItemProps['layout'];
};

const CustomFormItem: FC<CustomFormItemProps> = (props) => <Form.Item
    label={props?.label}
    required={props?.required}
    labelCol={{
        className: 'font-primary-alt',
    }}
    layout={props?.direction || 'vertical'}
/>;

export default memo(CustomFormItem);