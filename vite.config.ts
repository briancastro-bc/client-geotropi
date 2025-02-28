import path from 'node:path';

import {
    loadEnv,
    defineConfig,
} from 'vite';

import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode, }) => {
    const env = loadEnv(mode, process.cwd(), ['VITE_',]);

    return {
        plugins: [
            react(),
            tailwindcss(),
        ],
        server: {
            port: 4000,
            proxy: {
                '/api': {
                    target: env.VITE_BASE_URL,
                    changeOrigin: true,
                    rewrite: (p) => p.replace(/^\/api/, ''),
                },
                '/socket.io': {
                    target: env.VITE_BASE_URL,
                    ws: true,
                    changeOrigin: true,
                },
            },
        },
        resolve: {
            alias: {
                'src': path.resolve(__dirname, 'src'),
                'ioc': path.resolve(__dirname, 'src/ioc'),
                'img': path.resolve(__dirname, 'src/assets/img'),
                'i18n': path.resolve(__dirname, 'src/assets/i18n'),
                'contexts': path.resolve(__dirname, 'src/contexts'),
                'user': path.resolve(__dirname, 'src/contexts/user'),
                'portal': path.resolve(__dirname, 'src/apps/portal'),
                'shared': path.resolve(__dirname, 'src/apps/shared'),
                'theme': path.resolve(__dirname, 'src/apps/shared/theme'),
            },
        },
        optimizeDeps: {
            esbuildOptions: {
                tsconfigRaw: {
                    compilerOptions: {
                        experimentalDecorators: true,
                    },
                },
            },
        },
    };
});
