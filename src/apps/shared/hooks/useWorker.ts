import {
    useRef,
    useEffect,
    RefObject,
} from 'react';

const workers = new Map<string, Worker>();

export const useWorker = <T>(
    id: string,
    workerInit?: (info?: string) => Worker,
    onMessage?: (message: MessageEvent<T>) => void,
    workerInfo?: string,
): RefObject<Worker | null> => {
    const workerRef = useRef<Worker | null>(null);

    useEffect(() => {
        let currentWorker = workers.get(id);

        if (!currentWorker && workerInit) {
            currentWorker = workerInit(workerInfo);
            workers.set(id, currentWorker);
        }

        workerRef.current = currentWorker || null;

        if (workerRef.current && onMessage)
            workerRef.current.addEventListener('message', onMessage, { passive: true });

        if (workerRef.current) workerRef.current.postMessage({
            type: 'init',
            data: 'initialized',
        });


        return () => {
            if (workerRef.current && onMessage)
                workerRef.current.removeEventListener('message', onMessage);

            if (workers.get(id) === workerRef.current) {
                workers.delete(id);
                workerRef.current.terminate();
            }

            workerRef.current = null;
        };
    }, [id, onMessage, workerInit, workerInfo]);

    return workerRef;
};