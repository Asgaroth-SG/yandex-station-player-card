import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/yandex-station-player.ts',
      formats: ['es'],
      fileName: () => 'yandex-station-player-card.js',
    },
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
  },
});
