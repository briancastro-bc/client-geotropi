import { Injectable, } from './types';

import { Lifecycle, } from 'tsyringe';

import { HttpUserRepository, } from 'user/infrastructure/HttpUserRepository';

import { FetchHttpRepository, } from 'contexts/shared/infrastructure/repositories/FetchHttpRepository';

export default [
    {
        token: 'HttpRepository',
        provider: {
            useClass: FetchHttpRepository,
        },
        type: 'ClassProvider',
        options: {
            lifecycle: Lifecycle.Transient,
        },
    },
    {
        token: 'UserRepository',
        provider: {
            useClass: HttpUserRepository,
        },
        type: 'ClassProvider',
        options: {
            lifecycle: Lifecycle.Transient,
        },
    },
] as Array<Injectable>;