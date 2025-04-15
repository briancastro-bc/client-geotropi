import {
    FC,
    useMemo,
    useState,
    Suspense,
    ReactNode,
    MouseEvent,
} from 'react';
import { useTranslation, } from 'react-i18next';

import {
    BellIcon,
    UserIcon,
    LanguageIcon,
    PaintBrushIcon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
} from 'theme/icons';
import {
    motion,
    Title,
    Button,
    Avatar,
    Tooltip,
} from 'theme/components';
import { HeaderProps, } from 'theme/layouts/Header';

import HeaderDesktopSkeleton from './Skeleton';

type Action = 'search' | 'notifications' | 'help' | 'profile' | 'language' | 'theme';

type ActionStatuses = {
    [K in Action]: boolean;
};

type NavigationAction = {
    id: Action;
    label: string;
    icon: ReactNode;
    action: (event: MouseEvent, action: NavigationAction) => void;
};

type HeaderDesktopProps = HeaderProps;

const DEFAULT_ACTION_STATUSES: ActionStatuses = {
    'help': false,
    'search': false,
    'profile': false,
    'notifications': false,
    'language': false,
    'theme': false,
};

const HeaderDesktop: FC<HeaderDesktopProps> = () => {
    const { t, } = useTranslation();

    const [actionsStatus, setActionsStatus,] = useState<ActionStatuses>(DEFAULT_ACTION_STATUSES);

    const toggleActionStatus = (id: Action) => setActionsStatus((prevState) => ({
        ...DEFAULT_ACTION_STATUSES,
        [id]: !prevState?.[id],
    }));

    const navActions = useMemo<Array<NavigationAction>>(
        () => [
            {
                id: 'search',
                label: t('header.actions.search'),
                icon: <MagnifyingGlassIcon className='size-6 fill-inherit stroke-inherit'/>,
                action: (_, action: NavigationAction) => {
                    toggleActionStatus(action?.id);
                },
            },
            {
                id: 'notifications',
                label: t('header.actions.notifications'),
                icon: <BellIcon className='size-6 fill-inherit stroke-inherit'/>,
                action: (_, action: NavigationAction) => {
                    toggleActionStatus(action?.id);
                },
            },
            // {
            //     id: 'help',
            //     label: t('header.actions.help'),
            //     icon: <QuestionMarkCircleIcon className='size-6 fill-inherit stroke-inherit'/>,
            //     action: (_, action: NavigationAction) => {
            //         toggleActionStatus(action?.id);
            //     },
            // },
            {
                id: 'language',
                label: t('header.actions.language'),
                icon: <LanguageIcon className='size-6 fill-inherit stroke-inherit'/>,
                action: (_, action: NavigationAction) => {
                    toggleActionStatus(action?.id);
                },
            },
            {
                id: 'theme',
                label: t('header.actions.theme'),
                icon: <PaintBrushIcon className='size-6 fill-inherit stroke-inherit'/>,
                action: (_, action: NavigationAction) => {
                    toggleActionStatus(action?.id);
                },
            },
        ],
        [t,],
    );

    return (
        <Suspense fallback={<HeaderDesktopSkeleton/>}>
            <motion.header className='z-50 sticky top-0 w-full h-header-desktop bg-white border-b border-b-gray-100'>
                <motion.div className='w-full h-full flex items-center px-20'>
                    <Title
                        level={4}
                        className='font-primary-alt text-gray-900 m-0'
                    >
                        {t('header.brand')}
                    </Title>
                    <motion.nav className='ml-auto h-full flex items-center'>
                        <Button
                            shape='default'
                            size='large'
                            type='text'
                            variant='link'
                            className='font-primary font-medium tracking-wider'
                        >
                            {t('header.actions.help')}
                        </Button>
                        <motion.span className='block content-[""] h-12 w-0.5 ml-4 mr-2 bg-gray-100'/>
                        <motion.div className='flex items-center gap-x-4'>
                            {navActions?.map(navAction => (
                                <Tooltip
                                    key={navAction?.id}
                                    title={navAction?.label}
                                    trigger={['hover', 'click',]}
                                >
                                    <Button
                                        shape='round'
                                        size='large'
                                        type='text'
                                        variant='text'
                                        icon={navAction?.icon}
                                        className='w-12 h-12 focus:bg-transparent hover:bg-transparent fill-none stroke-2 stroke-gray-900'
                                        style={{
                                            ...(actionsStatus?.[navAction?.id] && {
                                                stroke: 'var(--color-primary-500)',
                                            })
                                        }}
                                        onClick={(event) => navAction?.action?.(event, navAction)}
                                    />
                                </Tooltip>
                            ))}
                            <Avatar
                                size='large'
                                shape='square'
                                icon={<UserIcon className='size-6'/>}
                                onClick={() => {}}
                            />
                        </motion.div>
                    </motion.nav>
                </motion.div>
            </motion.header>
        </Suspense>
    )
};

export default HeaderDesktop;