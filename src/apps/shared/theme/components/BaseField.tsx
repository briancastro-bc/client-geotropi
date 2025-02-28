import { FC, } from 'react';
import {
    Form,
    FormItemProps,
    Input,
    InputProps,
} from 'antd';

type InputType = 'Password' | 'Search' | 'TextArea';

export type BaseFieldProps = Omit<InputProps, 'prefix'>
    & Pick<FormItemProps, 'required' | 'label' | 'tooltip'>
    & {
        type?: InputType;
        prefix?: React.ReactNode;
    };

const inputMap: {
    [K in InputType]: typeof Input[K];
} = {
    Password: Input.Password,
    Search: Input.Search,
    TextArea: Input.TextArea,
} as const;

const BaseField: FC<BaseFieldProps> = ({
    type,
    prefix,
    label,
    tooltip,
    required,
    ...props
}) => {
    const Component = type ? inputMap[type] : Input;

    const fieldProps: any = {
        size: 'large',
        variant: 'outlined',
        classNames: {
            input: 'font-primary',
            prefix: 'mr-3',
        },
        ...props,
    };

    if (type !== 'TextArea' && prefix) fieldProps.prefix = prefix;

    return (
        <Form.Item
            label={label}
            tooltip={tooltip}
            required={required}
            labelCol={{
                className: 'font-primary-alt'
            }}
            layout='vertical'
        >
            <Component {...fieldProps}/>
        </Form.Item>
    );
};

export default BaseField;