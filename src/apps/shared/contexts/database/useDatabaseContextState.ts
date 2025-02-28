import {
    useMemo,
    useEffect,
} from 'react';
import { Dexie, EntityTable, } from 'dexie';

import {
    User,
    Preferences,
} from 'contexts/shared/domain/models';

import { useContainer, } from 'shared/contexts/container';

const DATABASE_NAME = 'cache';

type DatabaseEntities = {
    users: EntityTable<User, 'ID'>;
    preferences: EntityTable<Preferences, 'ID'>;
};

type Database = Dexie & DatabaseEntities;

type DatabaseContextState = {
    database: Database;
};

const useDatabaseContextState: () => DatabaseContextState = () => {
    const {
        registerDependency,
        isRegisteredDependency,
    } = useContainer();

    // * Important change to useRef if error.
    const database = useMemo(() => {
        const db = new Dexie(DATABASE_NAME, {
            autoOpen: true,
        });

        db.version(1).stores({});

        return db as Database;
    }, [],);

    useEffect(() => {
        if (!isRegisteredDependency<Database>('database', true))
            registerDependency<Database>('database', { useValue: database, });
    }, [ database, registerDependency, isRegisteredDependency,]);

    return {
        database,
    };
}

export default useDatabaseContextState;