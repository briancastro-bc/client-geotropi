import {
    FC,
    ChangeEvent,
} from 'react';
import {
    Form,
    Input,
    InputProps,
    FormItemProps,
} from 'antd';

type InputType = 'Password' | 'Search' | 'TextArea';

export type BaseFieldProps = Omit<InputProps, 'prefix'>
    & Pick<FormItemProps, 'required' | 'label' | 'tooltip'>
    & {
        type?: InputType;
        pattern?: RegExp;
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
    // pattern = /^[^$<>{}]*$/,
    pattern = /^[a-zA-Z0-9 :; @.,¡!¿?_-]*$/,
    ...props
}) => {
    const Component = type && type in inputMap ? inputMap?.[type] : Input;

    const fieldProps: any = {
        size: 'large',
        variant: 'outlined',
        classNames: {
            input: 'font-primary-alt',
            prefix: 'mr-3',
        },
        ...props,
    };

    if (type !== 'TextArea' && prefix) fieldProps.prefix = prefix;

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue } = event!.target;
        if (pattern.test(inputValue) && fieldProps?.onChange) {
            fieldProps.onChange(event);
            return;
        }
    }

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
            <Component
                {...fieldProps}
                onChange={handleOnChange}
            />
        </Form.Item>
    );
};

export default BaseField;