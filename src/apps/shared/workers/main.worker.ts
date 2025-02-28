const ctx: Worker = self as any;

const handleMessage: (event: MessageEvent<any>) => void = ({ data }) => {
    console.log('data', data);
    ctx.postMessage('holaaa');
};

ctx.addEventListener('message', handleMessage, { passive: true, });