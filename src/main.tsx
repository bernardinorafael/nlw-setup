import { QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { TooltipProvider } from '@radix-ui/react-tooltip'

import { App } from './App'
import { queryClient } from './lib/react-query'

const CONTAINER = ReactDOM.createRoot
const ROOT = document.getElementById('root') as HTMLElement

CONTAINER(ROOT).render(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={500} skipDelayDuration={0}>
      <App />
    </TooltipProvider>
  </QueryClientProvider>,
)
