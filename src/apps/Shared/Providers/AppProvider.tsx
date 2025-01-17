import {
    FC,
    Suspense,
    PropsWithChildren,
} from 'react';
import { RecoilRoot, } from 'recoil';

import ContainerProvider from './ContainerProvider';

type AppProviderProps = object & Pick<PropsWithChildren, 'children'>;

const AppProvider: FC<AppProviderProps> = ({
    children,
}) => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ContainerProvider>
                <RecoilRoot>
                    {children}
                </RecoilRoot>
            </ContainerProvider>
        </Suspense>
    );
};

export default AppProvider;