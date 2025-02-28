import msgpack from 'socket.io-msgpack-parser';
import {
    useRef,
    useEffect,
    useCallback,
} from 'react';
import {
    io,
    Socket,
} from 'socket.io-client';

type SocketContextState = {
    socket: Socket;
    connect: () => void;
    disconnect: () => void;
    emit: (
        event: string,
        payload: any
    ) => void;
    subscribe: (
        event: string,
        callback: (...args: Array<any>) => void
    ) => void;
    unsubscribe: (
        event: string,
        callback: (...args: Array<any>) => void
    ) => void;
};

const useSocketContextState: () => SocketContextState = () => {
    const socketRef = useRef<Socket | null>(Object.create(null));

    const socket = socketRef?.current;

    const connect: () => void = useCallback(() => {
        if (!socket?.connected && socket?.connect)
            socket.connect();
    }, [socket,]);

    const disconnect: () => void = useCallback(() => {
        if (socket?.connected && socket?.disconnect)
            socket.disconnect();
    }, [socket,]);

    const emit = useCallback(
        (
            event: string,
            payload: any,
        ) => socket?.emit(event, payload),
        [socket,]
    );

    const subscribe = useCallback(
        (
            event: string,
            callback: (...args: Array<any>) => void
        ) => socket?.on(event, callback),
        [socket,]
    );

    const unsubscribe = useCallback(
        (
            event: string,
            callback?: (...args: Array<any>) => void
        ) => socket?.off(event, callback),
        [socket,]
    );

    useEffect(() => {
        if (!socketRef?.current)
            socketRef.current = io(import.meta.env.VITE_BASE_URL, {
                parser: msgpack,
                transports: ['websocket', 'polling',],
                reconnection: true,
                reconnectionDelay: 5000,
                reconnectionDelayMax: 3 * 60 * 1000,
                timeout: 10 * 60 * 1000,
                autoConnect: false,
                withCredentials: true,
            });

        return () => {
            if (socketRef?.current && socketRef?.current?.connected)
                socketRef.current.disconnect();
        };
    }, []);

    return {
        socket: socket!,
        emit,
        connect,
        subscribe,
        disconnect,
        unsubscribe,
    };
};

export default useSocketContextState;