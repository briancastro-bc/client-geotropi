import { Managed, } from './Managed';

export interface History extends Omit<Managed, 'createdBy' | 'modifiedBy'> {
    key: string;
    url: string;
    path: string;
    params?: string | Array<string>;
    hash?: string;
}