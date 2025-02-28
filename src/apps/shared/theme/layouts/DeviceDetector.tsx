import {
    FC,
    memo,
    Fragment,
    ReactNode,
} from 'react';
import { useMediaQuery, } from 'react-responsive';

type DeviceDetectorProps = {
    mobile: Required<ReactNode>;
    desktop: Required<ReactNode>;
};

const DeviceDetector: FC<DeviceDetectorProps> = ({
    mobile,
    desktop,
}) => {
    const isMobile = useMediaQuery({
        maxWidth: '768px',
    });

    return (
        <Fragment>
            {isMobile && mobile}
            {!isMobile && desktop}
        </Fragment>
    );
}

export default memo(DeviceDetector);