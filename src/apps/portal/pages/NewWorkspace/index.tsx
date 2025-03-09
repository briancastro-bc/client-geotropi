import { FC, } from 'react';

import DeviceDetector from 'theme/layouts/DeviceDetector';

import NewWorkspaceMobile from './Mobile';

export type NewWorkspaceProps = object;

const NewWorkspace: FC<NewWorkspaceProps> = (props) => <DeviceDetector
    mobile={<NewWorkspaceMobile {...props}/>}
    desktop={<>new workspace</>}
/>

export default NewWorkspace;