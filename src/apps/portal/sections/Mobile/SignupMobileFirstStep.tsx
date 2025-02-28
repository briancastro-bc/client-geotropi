import {
    FC,
    JSX,
    useMemo,
    ChangeEventHandler,
} from 'react';
import { useSetAtom, } from 'jotai';
import { useTranslation, } from 'react-i18next';

import {
    GoogleOutlined,
    MailOutlined,
    WindowsOutlined,
} from 'theme/icons';
import {
    motion,
    Button,
} from 'theme/components';

import { signupAtom, } from 'portal/state/atoms';

type SignupOption = {
    label: string;
    icon: JSX.Element,
    provider: 'google' | 'microsoft' | 'email',
    action?: ChangeEventHandler,
};

type SignupMobileFirstStepProps = object;

const SignupMobileFirstStep: FC<SignupMobileFirstStepProps> = () => {
    const { t, } = useTranslation();

    const setState = useSetAtom(signupAtom);

    const signupOptions = useMemo<Array<SignupOption>>(
        () => [
            {
                label: t('signup.firstStep.google'),
                provider: 'google',
                icon: <GoogleOutlined/>,
            },
            {
                label: t('signup.firstStep.microsoft'),
                provider: 'microsoft',
                icon: <WindowsOutlined/>,
            },
            {
                label: t('signup.firstStep.email'),
                provider: 'email',
                icon: <MailOutlined/>,
            },
        ],
        [t,],
    );

    return (
        <motion.div className='h-full flex flex-col gap-y-4'>
            {signupOptions?.length && signupOptions.map(option => (
                <Button
                    block
                    size='large'
                    shape='round'
                    color='danger'
                    key={option?.label}
                    icon={option?.icon}
                    iconPosition='start'
                    onClick={() => setState((previousState) => ({
                        ...previousState,
                        provider: option?.provider,
                        currentStep: previousState?.currentStep + 1,
                    }))}
                >
                    {option?.label}
                </Button>
            ))}
        </motion.div>
    );
};

export default SignupMobileFirstStep;