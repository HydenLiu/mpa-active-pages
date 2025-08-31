import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginTailwindCSS } from 'rsbuild-plugin-tailwindcss'

export default defineConfig({
  plugins: [pluginReact(), pluginTailwindCSS()],
  server: {
    port: 8080,
  },
  source: {
    entry: {
      'hello-world': {
        import: './src/pages/hello-world/index.tsx',
      },
      'hello-world2': './src/pages/hello-world2/index.tsx',
    },
  },
  html: {
    template({ entryName }) {
      console.log(entryName, 'entryName')

      return './src/template/index.html'
    },
  },
  output: {
    assetPrefix: './',
    // legalComments: 'none',
  },
})
