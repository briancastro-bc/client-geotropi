import { FC, } from 'react';
import { useRouteError, } from 'react-router-dom';

type ErrorProps = object;

const Error: FC<ErrorProps> = () => {
    const error = useRouteError();

    return (
        <p>{JSON.stringify(error) as any}</p>
    );
};

export default Error;