import './styles/global.css'
import '@/lib/dayjs'

import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'

export function App() {
  return (
    <main className="flex h-screen justify-center py-10">
      <div className="flex max-h-[820px] max-w-[480px] flex-col gap-10 px-6">
        <Header />
        <SummaryTable />
      </div>
    </main>
  )
}
