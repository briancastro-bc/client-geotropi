import { FC, } from 'react';
import { Button, ButtonProps, } from 'antd';

type CustomButtonProps = ButtonProps & {
    showChildrenOnLoading?: boolean;
};

const CustomButton: FC<CustomButtonProps> = ({
    children,
    loading,
    showChildrenOnLoading = true,
    ...props
}) => {
    return (
        <Button
            loading={loading}
            className={`font-primary-alt ${props?.className || ''}`}
            {...props}
        >
            {(loading && showChildrenOnLoading) || !loading ? children : null}
        </Button>
    );
}

export default CustomButton;