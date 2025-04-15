import {
    FC,
} from 'react';

import BaseField, { BaseFieldProps } from 'theme/components/BaseField';

type CustomTextFieldProps = BaseFieldProps;

const CustomTextField: FC<CustomTextFieldProps> = (props) => <BaseField {...props}/>;

export default CustomTextField;