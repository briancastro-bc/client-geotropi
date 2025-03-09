import {
    FC,
    useRef,
    useState,
    useCallback,
} from 'react';
import { useAtomValue, } from 'jotai';

import { useSetLayout, } from 'shared/hooks';

import {
    motion,
} from 'theme/components';

import GoBack from 'theme/layouts/GoBack';
import Stepper from 'theme/layouts/Stepper';

import { newWorkspaceAtom, } from 'portal/state/atoms';
import { NewWorkspaceProps, } from 'portal/pages/NewWorkspace';

import FirstStep from 'portal/sections/NewWorkspace/Mobile/FirstStep';

type NewWorkspaceMobileProps = NewWorkspaceProps;

const NewWorkspaceMobile: FC<NewWorkspaceMobileProps> = () => {
    useSetLayout({
        showNavbar: false,
        showBottomNavigation: false,
    });

    const [containerHeight, setContainerHeight,] = useState<number>(0);

    const gobackRef = useRef<HTMLDivElement | null>(null);
    const gobackCbRef = useCallback((node: HTMLDivElement) => {
        if (node && !gobackRef.current) {
            gobackRef.current = node;
            setContainerHeight(node?.offsetHeight);
        }
    }, []);

    const state = useAtomValue(newWorkspaceAtom);

    return (
        <motion.section className='h-full overflow-x-hidden'>
            <motion.div className='relative h-full p-4 flex flex-col'>
                <GoBack ref={gobackCbRef}/>
                <motion.div
                    style={{
                        marginTop: `${containerHeight}px`,
                    }}
                    className='h-full flex flex-col pt-6'
                >
                    <Stepper
                        showSteps={false}
                        currentStep={state?.currentStep}
                        stepComponentProps={{
                            current: state?.currentStep,
                            direction: 'vertical',
                            size: 'small',
                            responsive: false,
                            className: 'mb-4',
                            progressDot: true,
                            items: [
                                {
                                    title: 'First step',
                                },
                                {
                                    title: 'Second step',
                                },
                                {
                                    title: 'Third step',
                                },
                            ],
                        }}
                    >
                        <FirstStep/>
                    </Stepper>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default NewWorkspaceMobile;