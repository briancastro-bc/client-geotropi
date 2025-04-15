import {
    FC,
} from 'react';
import {
    Tooltip,
    TooltipProps,
} from 'antd';

type CustomTooltipProps = TooltipProps;

const CustomTooltip: FC<CustomTooltipProps> = (props) => <Tooltip {...props}/>

export default CustomTooltip;