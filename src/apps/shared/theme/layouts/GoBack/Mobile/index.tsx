import { FC, } from 'react';
import { useTranslation, } from 'react-i18next';

import {
    ArrowLeftOutlined,
} from 'theme/icons';
import {
    motion,
    Button,
} from 'theme/components';
import { GoBackProps, } from 'theme/layouts/GoBack';

type GoBackMobileProps = GoBackProps;

const GoBackMobile: FC<GoBackMobileProps> = () => {
    const { t, } = useTranslation();

    return (
        <motion.div className='absolute inset-auto'>
            <Button
                size='large'
                type='link'
                variant='link'
                icon={<ArrowLeftOutlined size={40}/>}
            >
                {t('common.back')}
            </Button>
        </motion.div>
    );
};

export default GoBackMobile;