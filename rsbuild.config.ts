import { defineConfig, logger } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginTailwindCSS } from 'rsbuild-plugin-tailwindcss'
import fs from 'fs-extra'

const page = process.env.PAGE
if (!page) {
  throw new Error('⚠️ PAGE environment variable is not set')
}

logger.greet(`Current page: ${page}\n`)

export default defineConfig({
  plugins: [pluginReact(), pluginTailwindCSS()],
  server: {
    port: 8080,
  },
  source: {
    entry: {
      [page]: `./src/pages/${page}/index.tsx`,
    },
  },
  html: {
    template({ entryName }) {
      // Check if the page has its own HTML template
      const templatePath = `./src/pages/${entryName}/index.html`
      if (fs.existsSync(templatePath)) {
        return templatePath
      }

      return './src/template/index.html'
    },
  },
  output: {
    // legalComments: 'none',
  },
  performance: {
    removeConsole: import.meta.env.PROD,
    chunkSplit: {
      forceSplitting: {
        i18next: /node_modules[\\/]i18next/,
        '@tanstack': /node_modules[\\/]@tanstack/,
        '@radix-ui': /node_modules[\\/]@radix-ui/,
      },
    },
  },
})
