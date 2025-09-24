import { defineConfig } from 'vite';
import inspect from 'vite-plugin-inspect';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    base:"/memory/",
    plugins: [
    inspect(),
    ViteImageOptimizer({
        png: {
            // https://sharp.pixelplumbing.com/api-output#png
            quality: 50,
        },
        jpeg: {
            // https://sharp.pixelplumbing.com/api-output#jpeg
            quality: 60,
        },
        jpg: {
            // https://sharp.pixelplumbing.com/api-output#jpeg
            quality: 10,
        },
      })
  ],
});