import { atomWithReset, } from 'jotai/utils';

import { User, } from 'contexts/shared/domain/models';

export const userAtom = atomWithReset<User>({
    givenName: '',
    familyName: '',
    preferredUsername: '',
    email: '',
});