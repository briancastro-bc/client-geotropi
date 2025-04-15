import {
    FC,
    memo,
} from 'react';

import {
    motion,
    Progress,
} from 'theme/components';

type LinearProgressProps = {
    show: boolean;
};

const LinearProgress: FC<LinearProgressProps> = ({
    show,
}) => {
    if (!show) return null;

    return (
        <motion.div className='z-50 fixed top-0 left-0 w-full'>
            <Progress
                type='line'
                className='h-full'
                showInfo={false}
                percent={Infinity}
            />
        </motion.div>
    );
};

export default memo(LinearProgress);