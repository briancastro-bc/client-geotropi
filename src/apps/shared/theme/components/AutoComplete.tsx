import { FC, } from 'react';
import {
    Form,
    FormItemProps,
    AutoComplete,
    AutoCompleteProps,
} from 'antd';
import BaseField from './BaseField';

type CustomAutoCompleteProps = AutoCompleteProps
    & Pick<FormItemProps, 'required' | 'label' | 'tooltip'>;

const CustomAutoComplete: FC<CustomAutoCompleteProps> = ({
    label,
    tooltip,
    required,
    ...props
}) => {
    return (
        <Form.Item
            label={label}
            tooltip={tooltip}
            required={required}
            labelCol={{
                className: 'font-primary-alt',
            }}
            layout='vertical'
        >
            <AutoComplete size='large' {...props} placeholder=''>
                <BaseField value={props.value} onChange={props.onChange} size='large'/>
            </AutoComplete>
        </Form.Item>
    );
};

export default CustomAutoComplete;