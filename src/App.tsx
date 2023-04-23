import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'
import './styles/global.css'

import '@/lib/dayjs'

export function App() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="flex w-full max-w-5xl flex-col gap-10 px-6">
        <Header />
        <SummaryTable />
      </div>
    </main>
  )
}
