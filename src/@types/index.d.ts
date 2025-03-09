type WorkerMessageType = 'init'
| string;

type WorkerMessage<T = any> = {
    type: WorkerMessageType;
    data: T;
};

type WorkerInitResult = {
    initialized: boolean;
};