const ctx: Worker & WorkerGlobalScope = self as any;

let initialized = false;

const init: (data: any) => Promise<{
    data: any,
    initialized: boolean,
}> = async (data) => {
    initialized = true;

    return {
        data,
        initialized,
    };
};

const onMessage: (event: MessageEvent<WorkerMessage>) => Promise<void> = async ({
    data: payload,
}) => {
    const {
        type,
        data,
    } = payload;

    const actions: {
        [K in WorkerMessageType]: (data: any) => Promise<any>;
    } = {
        'init': init,
        'test': (data) => new Promise((resolve) => resolve(data)),
    };

    if (type in actions) {
        const resolved = await actions?.[type]?.(data);

        ctx.postMessage({
            type,
            data: resolved,
        });
    }
};

ctx.addEventListener(
    'message',
    onMessage,
    {
        passive: true,
    }
);