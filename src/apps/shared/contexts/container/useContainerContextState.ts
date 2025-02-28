import { useMemo, } from 'react';

import {
    container,
    ValueProvider,
    ClassProvider,
    TokenProvider,
    InjectionToken,
    FactoryProvider,
    DependencyContainer,
} from 'ioc/di';

type constructor<T> = {
    new (...args: any[]): T;
};

type ContainerContextState = {
    container: DependencyContainer;
    resolveDependency: <T>(token: InjectionToken<T>) => T;
    resolveDependencies: <T>(token: InjectionToken<T>) => Array<T>;
    registerDependency: {
        <T>(
            token: InjectionToken<T>,
            provider: ValueProvider<T>,
        ): DependencyContainer;
        <T>(
            token: InjectionToken<T>,
            provider: ClassProvider<T>,
        ): DependencyContainer;
        <T>(
            token: InjectionToken<T>,
            provider: TokenProvider<T>,
        ): DependencyContainer;
        <T>(
            token: InjectionToken<T>,
            provider: FactoryProvider<T>,
        ): DependencyContainer;
    };
    registerSingletonDependency: {
        <T>(
            from: InjectionToken<T>,
            to: InjectionToken<T>,
        ): DependencyContainer;
        <T>(token: constructor<T>): DependencyContainer;
    };
    isRegisteredDependency: <T>(
        token: InjectionToken<T>,
        recursive?: boolean,
    ) => boolean;
};

const useContainerContextState: () =>  ContainerContextState = () => {
    const resolveDependency = useMemo(() => container.resolve.bind(container), []);

    const resolveDependencies = useMemo(() => container.resolveAll.bind(container), []);

    const registerDependency = useMemo(() => container.register.bind(container), []);

    const registerSingletonDependency = useMemo(() => container.registerSingleton.bind(container), []);

    const isRegisteredDependency = useMemo(() => container.isRegistered.bind(container), []);

    return {
        container,
        resolveDependency,
        resolveDependencies,
        registerDependency,
        registerSingletonDependency,
        isRegisteredDependency,
    };
};

export default useContainerContextState;