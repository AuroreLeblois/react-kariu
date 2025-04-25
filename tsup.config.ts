import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts', 'src/**/*.tsx'],
  format: ['cjs', 'esm'], // Vous pouvez garder les deux formats si vous le souhaitez
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  treeshake: true,
  external: ['react', 'react-dom'],
  outDir: 'dist',
  bundle: true,
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.js' : '.mjs',
    };
  },
  esbuildOptions(options) {
    options.banner = {
      js: `/* 
 * React-Kariu
 * Library for React components and animations
 * @author Aurore Leblois
 * @copyright Copyright © ${new Date().getFullYear()} Aurore Leblois
 */`,
    };
  },
}); 