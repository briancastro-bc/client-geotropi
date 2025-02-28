import {
    FC,
    ComponentProps,
} from 'react';
import { Typography, TypographyProps, } from 'antd';

type CustomTitleProps = object & ComponentProps<TypographyProps['Title']>;

const CustomTitle: FC<CustomTitleProps> = ({
    children,
    ...props
}) => {
    return (
        <Typography.Title
            level={1}
            {...props}
        >
            {children}
        </Typography.Title>
    );
};

export default CustomTitle;