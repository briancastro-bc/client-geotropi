import { MotionProps, } from 'motion/react';

/**
 * @param y - Amount of distance in axe Y.
 * @returns - Motion props according to component.
 */
export default (y: number | string = 1000): MotionProps => ({
    initial: {
        y,
    },
    animate: {
        y: 0,
        transition: {
            ease: 'easeInOut',
            duration: 1.25,
        },
    },
});