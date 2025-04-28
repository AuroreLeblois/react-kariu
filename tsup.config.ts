import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  treeshake: true,
  external: ['react', 'react-dom', 'moment'],
  outDir: 'dist',
  bundle: true,
  outExtension({ format }) {
    console.log(format);
    return {
      js: format === 'cjs' ? '.js' : '.mjs',
    };
  },
  esbuildOptions(options) {
    options.logLevel = 'error';
    
    options.logOverride = {
      'unused-import': 'silent'
    };
    
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