import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [
        TanStackRouterRspack({
          routesDirectory: './src/app',
          generatedRouteTree: './src/routeTree.gen.ts',
          autoCodeSplitting: true,
        }),
      ],
    },
  },
    dev: {
    watchFiles: {
      paths: ['src/**/*.{ts,tsx,css}'],
    },
  },
});
