import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/presentation/' : '/',
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', {}]
        ]
      }
    })
  ],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
      external: [
        'lodash',
        'lodash/*',
        /^lodash\/.*/
      ],
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: (assetInfo) => {
          // Keep PDF files in a separate directory and preserve their names
          if (assetInfo.name?.endsWith('.pdf')) {
            return 'assets/files/[name][extname]';
          }
          return 'assets/[name].[hash][extname]';
        },
        manualChunks: undefined,
        globals: {
          lodash: 'lodash'
        }
      }
    },
    sourcemap: true,
    // Ensure assets are properly prefixed with base URL
    assetsInlineLimit: 0,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'lodash': resolve(__dirname, 'node_modules/lodash')
    }
  },
  server: {
    port: 5177,
    strictPort: true,
    hmr: {
      overlay: true
    }
  },
  optimizeDeps: {
    force: true,
    include: ['lodash', 'lodash/*']
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  // Add explicit asset handling for PDFs
  assetsInclude: ['**/*.pdf']
})
