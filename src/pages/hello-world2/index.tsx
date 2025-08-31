import React from 'react'
import ReactDOM from 'react-dom/client'
import LuckyWheel from './lucky-canvas'

const rootEl = document.getElementById('root')

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)
  root.render(
    <React.StrictMode>
      <div>456</div>
      <LuckyWheel />
    </React.StrictMode>,
  )
}
