import { atom, } from 'jotai';

type SignupState = {
    currentStep: number;
    provider: 'google' | 'microsoft' | 'email' | null;
};

const signupAtom = atom<SignupState>({
    currentStep: 0,
    provider: null,
});

type NewWorkspaceState = Pick<SignupState, 'currentStep'>;

const newWorkspaceAtom = atom<NewWorkspaceState>({
    currentStep: 0,
});

export {
    signupAtom,
    type SignupState,
    newWorkspaceAtom,
    type NewWorkspaceState,
};