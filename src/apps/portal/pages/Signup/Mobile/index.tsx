import {
    FC,
    useRef,
} from 'react';
import { useAtomValue, } from 'jotai';
import { MotionValue, } from 'motion/react';
import { useTranslation, } from 'react-i18next';

import GoldenGate from 'img/golden-gate.svg';

import {
    motion,
    Title,
    Paragraph,
} from 'theme/components';

import GoBack from 'theme/layouts/GoBack';
import Stepper from 'theme/layouts/Stepper';

import { slideUp, } from 'shared/animations';

import { signupAtom, } from 'portal/state/atoms';

import SignupMobileFirstStep from 'portal/sections/Mobile/SignupMobileFirstStep';
import SignupMobileSecondStep from 'portal/sections/Mobile/SignupMobileSecondStep';

type SignupMobileProps = object;

const SignupMobile: FC<SignupMobileProps> = () => {
    const { t, } = useTranslation();

    const containerRef = useRef<HTMLDivElement | null>(null);

    const state = useAtomValue(signupAtom);

    return (
        <motion.section className='w-full relative h-screen overflow-hidden'>
            <motion.div className='h-screen relative top-0 p-4'>
                <GoBack/>
                <motion.div className='h-full max-h-9/12 w-full'>
                    <img className='h-full w-auto mx-auto object-fill' src={GoldenGate} alt='golden gate'/>
                </motion.div>
            </motion.div>
            <motion.div
                ref={containerRef}
                {...slideUp(1000) as MotionValue<number>}
                className='z-10 w-full p-5 absolute bottom-0 flex flex-col items-center justify-end bg-gray-100 rounded-t-3xl fill-primary-500'
            >
                <motion.div className='mb-3'>
                    <Title
                        level={3}
                        className='font-primary-alt font-bold mb-0'
                    >
                        {t('signup.heading')}
                    </Title>
                </motion.div>
                <motion.div className='mb-6'>
                    <Paragraph className='text-sm leading-4 font-primary text-black text-center mb-0'>
                        {t('signup.description')}
                    </Paragraph>
                </motion.div>
                <Stepper
                    currentStep={state?.currentStep}
                    className='w-full'
                >
                    <SignupMobileFirstStep/>
                    <SignupMobileSecondStep/>
                </Stepper>
            </motion.div>
        </motion.section>
    );
};

export default SignupMobile;