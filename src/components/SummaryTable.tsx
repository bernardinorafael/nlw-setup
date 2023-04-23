import { api } from '@/lib/axios'
import { generateDatesYearBeginning } from '@/util/generates-dates-year-beginning'
import { useQuery } from '@tanstack/react-query'
import { HabitDay } from './HabitDay'
import dayjs from 'dayjs'
import { Tooltip } from './primitives/Tooltip'

interface Summary {
  summary: {
    id: string
    date: Date
    completed: number
    amount: number
  }[]
}

export function SummaryTable() {
  const summary = useQuery(['summary'], async (): Promise<Summary> => {
    const response = await api.get('/summary')
    return response.data
  })

  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  const summaryDates = generateDatesYearBeginning()

  const dateFormatter = (date: Date) => dayjs(date).format('D [de] MMMM [de] YYYY')

  return (
    <div className="flex flex-col gap-5 overflow-y-auto overscroll-contain rounded-2xl border border-zinc-800">
      <div className="sticky top-0 flex items-center justify-between gap-2 bg-zinc-950 p-4 pb-0">
        {weekDays.map((weekDay, i) => {
          return (
            <div
              key={`${weekDay}-${i}`}
              className="flex h-12 w-12 items-center justify-center text-xl font-bold text-zinc-400"
            >
              {weekDay}
            </div>
          )
        })}
      </div>

      <div className="flex flex-row flex-wrap justify-between gap-2 px-4 pb-4">
        {summaryDates
          .map((date) => {
            const dayInSummary = summary.data?.summary.find((day) => {
              return dayjs(date).isSame(day.date, 'day')
            })

            return (
              <Tooltip key={date.toString()} render={dateFormatter(date)}>
                <div>
                  <HabitDay
                    amount={dayInSummary?.amount}
                    completed={dayInSummary?.completed}
                    date={date}
                  />
                </div>
              </Tooltip>
            )
          })
          .reverse()}
      </div>
    </div>
  )
}
