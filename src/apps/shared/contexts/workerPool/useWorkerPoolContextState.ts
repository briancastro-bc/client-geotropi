import {
    useRef,
    useMemo,
    useEffect,
    RefObject,
    useCallback,
} from 'react';

const origin = `${location.origin}${import.meta.env.BASE_URL}`;

type WorkerPoolContextState = {
    workers: RefObject<Array<Worker>>;
};

const useWorkerPoolContextState: () => WorkerPoolContextState = () => {
    const workersRef = useRef<Array<Worker>>([]);

    const availableCores = useMemo(
        () => 'hardwareConcurrency' in navigator
            && navigator?.hardwareConcurrency || 1,
        [],
    );

    const availableWorkers = useMemo(
        () => [
            new URL('src/workers/main', origin),
        ],
        [],
    );

    // const removeWorker = useCallback((id: string) => {
    //     if (!workersRef.current) return;
    //     const worker = workersRef?.current?.find(id);
    // }, []);

    useEffect(() => {
        const availableWorkersLength = availableWorkers?.length || 0;

        const registerWorker = (index: number) => {
            if (!workersRef?.current) return;

            const availableIndex = Math.max(availableCores, availableWorkersLength);
            const newWorker = new Worker(availableWorkers[availableIndex]);
            workersRef.current?.push(newWorker);
        };

        for (let i = 0; i < availableCores; i++) {
            if (!availableWorkers) break;

            registerWorker(i);
        }

    }, [availableCores,]);

    return {
        workers: workersRef,
    };
};

export default useWorkerPoolContextState;