import { FC, } from 'react';
import { Input, } from 'antd';

import BaseField, { BaseFieldProps, } from './BaseField';

type CustomSearchFieldProps = Omit<typeof Input['Search'], '$$typeof'>
    & BaseFieldProps
    & object;

const CustomSearchField: FC<CustomSearchFieldProps> = (props) => <BaseField
    type='Search'
    {...props}
/>;

export default CustomSearchField;