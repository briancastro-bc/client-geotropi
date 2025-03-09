import {
    FC,
} from 'react';
import { useSetAtom, } from 'jotai';
import { Controller, } from 'react-hook-form';
import { useTranslation, } from 'react-i18next';

import {
    motion,
    Title,
    Button,
    Editor,
    Paragraph,
    TextField,
    TextAreaField,
} from 'theme/components';

import { useNewWorkspaceForm, } from 'portal/hooks';
import { newWorkspaceAtom, } from 'portal/state/atoms';
import { overviewSchema, } from 'portal/schemas/NewWorkspaceSchema';

type SecondStepProps = object;

const SecondStep: FC<SecondStepProps> = () => {
    const { t, } = useTranslation();

    const setState = useSetAtom(newWorkspaceAtom);

    const {
        control,
    } = useNewWorkspaceForm();

    const loading = false;

    return (
        <motion.div className='h-full flex flex-col'>
            <Title
                level={2}
                className='text-2xl font-primary font-bold'
            >
                {t('newWorkspace.firstStep.heading')}
            </Title>
            <Paragraph className='text-sm font-primary-alt text-gray-700'>
                {t('newWorkspace.firstStep.subheading')}
            </Paragraph>
            <Controller
                render={({ field, fieldState, }) => (
                    <TextField
                        required
                        autoFocus
                        disabled={loading}
                        label={t('newWorkspace.firstStep.name.label')}
                        placeholder={t('newWorkspace.firstStep.name.placeholder')}
                        {...fieldState?.error && {
                            status: 'error',
                        }}
                        {...field}
                    />
                )}
                control={control}
                name='name'
            />
            <Controller
                render={({ field, fieldState, }) => (
                    <TextAreaField
                        required
                        showCount
                        disabled={loading}
                        maxLength={overviewSchema?.shape?.description?.maxLength || 0}
                        label={t('newWorkspace.firstStep.description.label')}
                        placeholder={t('newWorkspace.firstStep.description.placeholder')}
                        {...fieldState?.error && {
                            status: 'error',
                        }}
                        {...field}
                    />
                )}
                control={control}
                name='description'
            />
            <Editor/>
            <motion.div className='mt-auto'>
                <Button
                    block
                    shape='round'
                    disabled={loading}
                    size='large'
                    color='primary'
                    variant='solid'
                >
                    {t('common.next')}
                </Button>
            </motion.div>
        </motion.div>
    );
};

export default SecondStep;