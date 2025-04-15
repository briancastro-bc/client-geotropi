import { FC, } from 'react';
// import { MotionValue, } from 'motion/react';

import { useHistory, } from 'shared/hooks';
// import { slideY, } from 'shared/animations';

import {
    UserIcon,
    BellIcon,
    Bars3BottomLeftIcon,
    MagnifyingGlassIcon,
} from 'theme/icons';
import {
    motion,
    Button,
    Avatar,
} from 'theme/components';
import { HeaderProps, } from 'theme/layouts/Header';

type HeaderMobileProps = HeaderProps;

const HeaderMobile: FC<HeaderMobileProps> = (props) => {
    const {
        navigateTo,
    } = useHistory();

    return (
        <motion.header
            ref={props.ref}
            // {...slideY(-1000) as MotionValue<number>}
            className='z-10 sticky top-0 w-full h-16 overflow-hidden'
        >
            <motion.div className='w-full h-full py-3 px-4 flex items-center'>
                <motion.div className='h-full flex items-center'>
                    <Button
                        size='large'
                        type='default'
                        variant='outlined'
                        icon={<Bars3BottomLeftIcon className='size-6'/>}
                        onClick={() => navigateTo('/new')}
                    />
                </motion.div>
                <motion.div className='h-full ml-auto flex items-center justify-end gap-x-2'>
                    <Button
                        size='large'
                        type='text'
                        variant='text'
                        icon={<MagnifyingGlassIcon className='size-6'/>}
                    />
                    <Button
                        size='large'
                        type='text'
                        variant='text'
                        icon={<BellIcon className='size-6'/>}
                    />
                    <Avatar
                        size='large'
                        shape='square'
                        icon={<UserIcon className='size-6'/>}
                        onClick={() => navigateTo('/me')}
                    />
                </motion.div>
            </motion.div>
        </motion.header>
    );
};

export default HeaderMobile;