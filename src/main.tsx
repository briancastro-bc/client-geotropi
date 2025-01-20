import './index.css';

import 'reflect-metadata';

import { StrictMode, } from 'react';
import { createRoot, } from 'react-dom/client';
import { initReactI18next, } from 'react-i18next';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import App from '@/App.tsx';
import es from '@/assets/i18n/es.json';
import en from '@/assets/i18n/en.json';

import AppProvider from '@Shared/Providers/AppProvider.tsx';

async function init(): Promise<void> {
    await i18next
        .use(LanguageDetector)
        .use(initReactI18next)
        .init<any>({
            debug: true,
            resources: {
                es,
                en,
            },
            fallbackLng: 'es',
            lowerCaseLng: true,
            returnNull: true,
            returnObjects: true,
            interpolation: {
                escapeValue: true,
            },
        })
}

function render(): void {
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

init()
    .then(render);