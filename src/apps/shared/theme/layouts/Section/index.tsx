import {
    FC,
    PropsWithChildren,
} from 'react';

import DeviceDetector from 'theme/layouts/DeviceDetector';

import SectionMobile from './Mobile';
import SectionDesktop from './Desktop';

type SectionProps = object & Pick<PropsWithChildren, 'children'>;

const Section: FC<SectionProps> = (props) => {
    return (
        <DeviceDetector
            mobile={<SectionMobile {...props}/>}
            desktop={<SectionDesktop {...props}/>}
        />
    );
};

export default Section;