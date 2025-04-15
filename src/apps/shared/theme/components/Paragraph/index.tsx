import {
    FC,
    ComponentProps,
} from 'react';
import { Typography, TypographyProps, } from 'antd';

type CustomParagraphProps = object & ComponentProps<TypographyProps['Title']>;

const CustomParagraph: FC<CustomParagraphProps> = ({
    children,
    ...props
}) => {
    return (
        <Typography.Paragraph {...props}>
            {children}
        </Typography.Paragraph>
    );
};

export default CustomParagraph;