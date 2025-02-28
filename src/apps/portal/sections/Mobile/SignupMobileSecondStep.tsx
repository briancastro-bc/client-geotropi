import { FC, } from 'react';
import {
    useForm,
    Controller,
} from 'react-hook-form';
import { useSetAtom, } from 'jotai';
import { useTranslation, } from 'react-i18next';
import { zodResolver, } from '@hookform/resolvers/zod';

import {
    LockOutlined,
    MailOutlined,
} from 'theme/icons';
import {
    motion,
    TextField,
    PasswordField,
    Button,
} from 'theme/components';

import {
    signupSchema,
    SignupSchema,
} from 'portal/schemas/SignupSchema';
import { signupAtom, } from 'portal/state/atoms';
import { useSaveUserMutation, } from 'portal/hooks/mutations';

type SignupMobileSecondStepProps = object;

const SignupMobileSecondStep: FC<SignupMobileSecondStepProps> = () => {
    const { t, } = useTranslation();

    const setState = useSetAtom(signupAtom);

    const {
        control,
        formState: { isValid, },
        handleSubmit,
    } = useForm<SignupSchema>({
        resolver: zodResolver(signupSchema),
        mode: 'all',
        reValidateMode: 'onChange',
    });

    const {
        mutateAsync: saveUser,
        status: saveUserStatus,
    } = useSaveUserMutation();

    const disabled = !isValid;
    const loading = saveUserStatus === 'pending';

    return (
        <motion.div className='h-full flex flex-col'>
            <motion.div className='flex items-center gap-x-6'>
                <Controller
                    render={({ field, fieldState, }) => (
                        <TextField
                            disabled={loading}
                            label={t('signup.secondStep.givenName.label')}
                            placeholder={t('signup.secondStep.givenName.placeholder')}
                            {...fieldState?.error && {
                                status: 'error',
                            }}
                            {...field}
                        />
                    )}
                    control={control}
                    name='givenName'
                />
                <Controller
                    render={({ field, fieldState, }) => (
                        <TextField
                            disabled={loading}
                            label={t('signup.secondStep.familyName.label')}
                            placeholder={t('signup.secondStep.familyName.placeholder')}
                            {...fieldState?.error && {
                                status: 'error',
                            }}
                            {...field}
                        />
                    )}
                    control={control}
                    name='familyName'
                />
            </motion.div>
            <Controller
                render={({ field, fieldState, }) => (
                    <TextField
                        disabled={loading}
                        prefix={<MailOutlined/>}
                        label={t('signup.secondStep.email.label')}
                        placeholder={t('signup.secondStep.email.placeholder')}
                        {...fieldState?.error && {
                            status: 'error',
                        }}
                        {...field}
                    />
                )}
                control={control}
                name='email'
            />
            <Controller
                render={({ field, fieldState, }) => (
                    <PasswordField
                        disabled={loading}
                        prefix={<LockOutlined/>}
                        label={t('signup.secondStep.password.label')}
                        placeholder={t('signup.secondStep.password.placeholder')}
                        {...fieldState?.error && {
                            status: 'error',
                        }}
                        {...field}
                    />
                )}
                control={control}
                name='password'
            />
            <motion.div className='flex flex-col gap-y-2'>
                <Button
                    block
                    shape='round'
                    loading={loading}
                    disabled={disabled || loading}
                    size='large'
                    color='primary'
                    variant='solid'
                    onClick={handleSubmit(async (data) => {
                        await saveUser({
                            ...data,
                        });
                    })}
                >
                    {t('common.complete')}
                </Button>
                <Button
                    block
                    shape='round'
                    disabled={loading}
                    size='large'
                    color='primary'
                    variant='link'
                    onClick={() => setState((previousState) => ({
                        ...previousState,
                        currentStep: previousState?.currentStep - 1,
                    }))}
                >
                    {t('common.previous')}
                </Button>
            </motion.div>
        </motion.div>
    );
};

export default SignupMobileSecondStep;