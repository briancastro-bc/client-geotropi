import {
    FC,
    memo,
} from 'react';
import {
    AutoComplete,
    AutoCompleteProps,
} from 'antd';

import BaseField from '../BaseField';

type CustomAutoCompleteProps = AutoCompleteProps;

const CustomAutoComplete: FC<CustomAutoCompleteProps> = (props) => <AutoComplete size='large' {...props}>
    <BaseField value={props?.value} onChange={props?.onChange} size='large'/>
</AutoComplete>

export default memo(CustomAutoComplete);