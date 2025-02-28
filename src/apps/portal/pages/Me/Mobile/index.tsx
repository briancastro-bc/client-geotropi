import { FC, } from 'react';

import {
    motion,
} from 'theme/components';

type MeMobileProps = object;

const MeMobile: FC<MeMobileProps> = () => {
    return (
        <motion.section>
            Profile
        </motion.section>
    );
};

export default MeMobile;