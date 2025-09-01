import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/styles/main.css'
import { initI18n } from '@/utils/i18n'
import { resources } from './locales'

initI18n(resources, 'fr')

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
