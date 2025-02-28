import { FC, } from 'react';
import { Skeleton, SkeletonProps, } from 'antd';

type CustomSkeletonProps = object & SkeletonProps;

const CustomSkeleton: FC<CustomSkeletonProps> = (props) => {
    return (
        <Skeleton.Button
            block
            size='large'
            {...props}
        />
    );
};

export default CustomSkeleton;