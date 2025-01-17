import {
  container,
  Provider,
  Lifecycle,
  InjectionToken,
  RegistrationOptions,
  TokenProvider,
  ValueProvider,
  FactoryProvider,
  ClassProvider,
} from 'tsyringe';

export type InjectableType = 'constructor'
| 'ValueProvider'
| 'FactoryProvider'
| 'TokenProvider'
| 'ClassProvider';

export type Injectable = {
  token: InjectionToken;
  provider: Provider;
  type: InjectableType;
  options?: RegistrationOptions;
};

const dependencies: Array<Injectable> = [
  {
    token: 'BACKEND_URL',
    provider: {
      useValue: import.meta.env.VITE_BACKEND_URL,
    },
    type: 'ValueProvider',
  },
];

function registerDependency(dependency: Injectable): void {
  const actions: {
    [K in InjectableType]: () => void
  } = {
    'constructor': () => container
      .register<any>(dependency.token, dependency.provider as any, dependency.options),
    'ValueProvider': () => container
      .register<any>(dependency.token, dependency.provider as ValueProvider<any>),
    'FactoryProvider': () => container
      .register<any>(dependency.token, dependency.provider as FactoryProvider<any>),
    'TokenProvider': () => container
      .register<any>(dependency.token, dependency.provider as TokenProvider<any>, dependency.options),
    'ClassProvider': () => container
      .register<any>(dependency.token, dependency.provider as ClassProvider<any>, dependency.options),
  };

  actions[dependency.type]();
}

for (const dependency of dependencies) {
  registerDependency(dependency);
}