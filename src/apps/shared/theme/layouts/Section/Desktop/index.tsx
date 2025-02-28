import {
    FC,
    PropsWithChildren,
} from 'react';

type SectionDesktopProps = object & Pick<PropsWithChildren, 'children'>;

const SectionDesktop: FC<SectionDesktopProps> = ({
    children,
}) => {
    return (
        <section className='h-full overflow-y-auto overflow-x-hidden'>
            {children}
        </section>
    );
};

export default SectionDesktop;