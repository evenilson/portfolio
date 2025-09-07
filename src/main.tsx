import './styles/global.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { initGA, injectGAScript } from './lib/analytics'

const queryClient = new QueryClient()

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined
if (GA_ID) {
  injectGAScript(GA_ID)
  initGA(GA_ID)
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
