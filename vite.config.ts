import path from 'node:path';

import {
    loadEnv,
    defineConfig,
} from 'vite';

import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode, }) => {
    loadEnv(mode, process.cwd(), 'VITE_');

    return {
        plugins: [react()],
        server: {
            port: 4000,
            proxy: {},
        },
        resolve: {
            alias: {
                '@ioc': path.resolve(__dirname, './src/ioc'),
                '@Shared': path.resolve(__dirname, './src/apps/Shared'),
                '@shared': path.resolve(__dirname, './src/contexts/shared'),
            },
        },
    };
});
