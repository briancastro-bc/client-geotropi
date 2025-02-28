import {
    useRef,
    useEffect,
    RefObject,
} from 'react';

export const useWorker: <T>(
    workerInit?: (info?: string) => Worker,
    onMessage?: (message: MessageEvent<T>) => void,
    workerInfo?: string,
) => RefObject<Worker | null> = (
    workerInit,
    onMessage,
    workerInfo,
) => {
    const worker = useRef<Worker | null>(null);

    useEffect(() => {
        if (workerInit && !worker.current) {
            worker.current = workerInit(workerInfo);

            if (onMessage) worker.current.addEventListener('message', onMessage, {
                passive: true,
            });

            worker.current.postMessage('init');
        }

        return () => {
            worker?.current?.terminate();
            worker.current = null;
        };
    }, [onMessage, workerInit, workerInfo,]);

    return worker;
}