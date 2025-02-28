import {
    FC,
    PropsWithChildren,
} from 'react';

import {
    motion,
} from 'theme/components';

type SectionMobileProps = object & Pick<PropsWithChildren, 'children'>;

const SectionMobile: FC<SectionMobileProps> = ({
    children,
}) => {
    return (
        <motion.section
            initial={{ opacity: 0, }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.75,
                },
            }}
            exit={{ opacity: 0, }}
            className='h-screen'
        >
            <div className='h-full overflow-y-auto overflow-x-hidden'>
                <div className='relative h-full p-4'>
                    {children}
                </div>
            </div>
        </motion.section>
    );
};

export default SectionMobile;