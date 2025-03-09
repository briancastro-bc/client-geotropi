import { useForm, } from 'react-hook-form';
import { zodResolver, } from '@hookform/resolvers/zod';

import {
    overviewSchema,
    OverviewSchema,
} from 'portal/schemas/NewWorkspaceSchema';

export const useNewWorkspaceForm = () => {
    const form = useForm<OverviewSchema>({
        resolver: zodResolver(overviewSchema),
        mode: 'all',
        reValidateMode: 'onChange',
    });

    return form;
};