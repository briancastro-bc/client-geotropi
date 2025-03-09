import { FC, } from 'react';
import { useTranslation, } from 'react-i18next';

import { useHistory, } from 'shared/hooks';

import {
    ArrowLeftIcon,
} from 'theme/icons';
import {
    motion,
    Button,
} from 'theme/components';
import { GoBackProps, } from 'theme/layouts/GoBack';

type GoBackMobileProps = GoBackProps;

const GoBackMobile: FC<GoBackMobileProps> = ({
    children,
    showText = true,
    ...props
}) => {
    const { t, } = useTranslation();

    const {
        navigateToPrevious,
    } = useHistory();

    return (
        <motion.div
            ref={props.ref}
            className='absolute inset-auto flex items-center'
        >
            <Button
                size='middle'
                type='link'
                variant='link'
                icon={<ArrowLeftIcon className='size-6'/>}
                onClick={() => navigateToPrevious()}
                className='px-0 text-base'
            >
                {showText && t('common.back')}
            </Button>
            {children}
        </motion.div>
    );
};

export default GoBackMobile;