import { atom, } from 'jotai';

type SignupState = {
    currentStep: number;
    provider: 'google' | 'microsoft' | 'email' | null;
};

const signupAtom = atom<SignupState>({
    currentStep: 0,
    provider: null,
});

export {
    signupAtom,
    type SignupState,
};