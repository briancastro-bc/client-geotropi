import 'reflect-metadata';
import '@ant-design/v5-patch-for-react-19';

import './index.css';

import {
    Suspense,
    StrictMode,
} from 'react';
import { createRoot, } from 'react-dom/client';
import { initReactI18next, } from 'react-i18next';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import App from './App.tsx';
import FullscreenSkeleton from 'theme/layouts/FullscreenSkeleton';

async function init(): Promise<void> {
    await i18next
        .use(LanguageDetector)
        .use(initReactI18next)
        .init<any>({
            debug: true,
            resources: {
                es: (await import('i18n/es.json')).default,
                en: (await import('i18n/en.json')).default,
            },
            fallbackLng: 'en',
            lowerCaseLng: true,
            returnNull: true,
            returnObjects: true,
            interpolation: {
                escapeValue: true,
            },
        });
}

function render(): void {
    const rootElement = document.getElementById('root');

    const root = createRoot(rootElement!);
    root.render(
        <StrictMode>
            <Suspense fallback={<FullscreenSkeleton />}>
                <App/>
            </Suspense>
        </StrictMode>
    );
}

init()
    .then(render);