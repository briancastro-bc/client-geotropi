import './index.css';

import 'reflect-metadata';

import { StrictMode, } from 'react';
import { createRoot, } from 'react-dom/client';

import App from './App.tsx';
import AppProvider from '@Shared/Providers/AppProvider.tsx';

function init(): void {
    const rootElement = document.getElementById('root');

    const root = createRoot(rootElement!);
    root.render(
        <StrictMode>
            <AppProvider>
                <App/>
            </AppProvider>
        </StrictMode>
    );
}

init();