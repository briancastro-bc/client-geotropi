import { FC, } from 'react';
import { Avatar, AvatarProps, } from 'antd';

type CustomAvatarProps = AvatarProps & object;

const CustomAvatar: FC<CustomAvatarProps> = ({
    children,
    ...props
}) => {
    return (
        <Avatar
            className={`font-primary-alt ${props?.className || ''}`}
            {...props}
        >
            {children}
        </Avatar>
    );
}

export default CustomAvatar;