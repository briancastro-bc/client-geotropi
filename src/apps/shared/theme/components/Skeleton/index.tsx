import {
    FC,
    memo,
} from 'react';
import {
    Skeleton,
    SkeletonProps,
} from 'antd';

type CustomSkeletonProps = object & SkeletonProps;

const CustomSkeleton: FC<CustomSkeletonProps> = (props) => <Skeleton {...props}/>

export default memo(CustomSkeleton);