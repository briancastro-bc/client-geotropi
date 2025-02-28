import { FC, } from 'react';

import {
    motion,
    Skeleton,
} from 'theme/components';

const MotionSkeleton = motion.create(Skeleton);

type FullscreenSkeletonMobileProps = object;

const FullscreenSkeletonMobile: FC<FullscreenSkeletonMobileProps> = () => {
    return (
        <motion.div className='h-screen flex flex-col gap-y-4 overflow-hidden'>
            <MotionSkeleton active className='h-10'/>
            <motion.div className='flex items-center gap-x-4'>
                <MotionSkeleton active className='w-full h-16'/>
                <MotionSkeleton active className='w-full h-16'/>
                <MotionSkeleton active className='w-full h-16'/>
            </motion.div>
            <motion.div className='h-full flex flex-col gap-y-4'>
                <MotionSkeleton active className='h-full'/>
                <MotionSkeleton active className='h-full'/>
            </motion.div>
        </motion.div>
    );
};

export default FullscreenSkeletonMobile;