import {
    FC,
    memo,
} from 'react';

import DeviceDetector from 'theme/layouts/DeviceDetector';

import FullscreenSkeletonMobile from './Mobile';

type FullscreenSkeletonProps = object;

const FullscreenSkeleton: FC<FullscreenSkeletonProps> = () => {
    return (
        <DeviceDetector
            mobile={<FullscreenSkeletonMobile/>}
            desktop={<p>Loading...</p>}
        />
    );
};

export default memo(FullscreenSkeleton);