import { promises } from 'fs';
import { dirname } from 'path';
import { defineConfig } from 'vite';
import { default as dts } from 'vite-plugin-dts';
import { default as pkg } from './package.json';

const main = {
  tsconfig: 'tsconfig.json',
  out: 'lib',
  entry: 'src/index.ts',
  name: 'ahks'
};

const utils = {
  tsconfig: 'tsconfig.utils.json',
  out: 'lib/utils',
  entry: 'src/utils/index.ts',
  name: 'ahks.utils'
};

const variant = process.env.VARIANT === 'main' ? main : utils;

export default defineConfig({
  plugins: [
    dts({
      tsConfigFilePath: variant.tsconfig,
      beforeWriteFile(filePath, content) {
        promises.mkdir(dirname(filePath), { recursive: true }).then(() => {
          promises.writeFile(
            filePath.replace('.d.ts', '.d.mts'),
            content.replaceAll('.js', '.mjs'),
            { encoding: 'utf8' }
          );
        });

        return {
          filePath,
          content
        };
      }
    })
  ],
  appType: 'custom',
  build: {
    minify: true,
    sourcemap: 'hidden',
    outDir: variant.out,
    emptyOutDir: false,
    lib: {
      entry: variant.entry,
      name: variant.name,
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    target: [
      'firefox55',
      'chrome57'
    ],
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies)
      ]
    }
  },
  esbuild: {
    charset: 'utf8'
  }
});
