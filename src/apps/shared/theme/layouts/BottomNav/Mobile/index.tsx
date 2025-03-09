import {
    FC,
    ReactNode,
    useMemo,
} from 'react';
import {
    matchPath,
    useLocation,
} from 'react-router-dom';
import { useTranslation, } from 'react-i18next';

import { useHistory, } from 'shared/hooks';

import {
    HomeIcon,
    HeartIcon,
    Squares2X2Icon,
    ChatBubbleBottomCenterIcon,
} from 'theme/icons';
import {
    Button,
    motion,
} from 'theme/components';
import { BottomNavProps, } from 'theme/layouts/BottomNav';

type Option = {
    label: string;
    icon: ReactNode;
    active: boolean;
    action?: () => void;
};

type BottomNavMobileProps = BottomNavProps;

const BottomNavMobile: FC<BottomNavMobileProps> = (props) => {
    const { t, } = useTranslation();

    const location = useLocation();

    const { navigateTo, } = useHistory();

    const navOptions: Array<Option> = useMemo(
        () => [
            {
                label: t('bottom.home'),
                icon: <HomeIcon className='size-6 fill-inherit stroke-inherit'/>,
                active: !!matchPath('/', location?.pathname),
                action: () => navigateTo('/'),
            },
            {
                label: t('bottom.messages'),
                icon: <ChatBubbleBottomCenterIcon className='size-6 fill-inherit stroke-inherit'/>,
                active: !!matchPath('messages', location?.pathname),
                action: () => navigateTo('/messages'),
            },
            {
                label: t('bottom.explore'),
                icon: <Squares2X2Icon className='size-6 fill-inherit stroke-inherit'/>,
                active: !!matchPath('explore', location?.pathname),
                action: () => navigateTo('/explore'),
            },
            {
                label: t('bottom.favorites'),
                icon: <HeartIcon className='size-6 fill-inherit stroke-inherit'/>,
                active: !!matchPath('favorites', location?.pathname),
                action: () => navigateTo('/favorites'),
            },
        ],
        [t, location?.pathname, navigateTo,],
    );

    return (
        <motion.nav
            ref={props.ref}
            className='z-10 fixed bottom-0 left-0 w-full flex justify-between overflow-x-hidden px-3 py-3 border border-gray-200 rounded-t-2xl'
        >
            {navOptions?.map(({ label, icon, active, action, }) => (
                <motion.div key={label} className='flex flex-col gap-y-1.5'>
                    <Button
                        shape='round'
                        size='large'
                        type='text'
                        variant='text'
                        icon={icon}
                        className={`w-20 h-8 focus:bg-transparent hover:bg-transparent fill-none stroke-2 ${active ? 'stroke-primary-500' : 'stroke-gray-700'}`}
                        onClick={action}
                    />
                    <motion.span className={`font-primary text-center text-sm ${active ? 'text-primary-500 font-bold' : ''}`}>
                        {label}
                    </motion.span>
                </motion.div>
            ))}
        </motion.nav>
    );
};

export default BottomNavMobile;