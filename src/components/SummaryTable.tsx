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
    <div className="flex w-full rounded-2xl border border-zinc-800 p-4">
      <div className="grid grid-flow-row grid-rows-7 gap-1">
        {weekDays.map((weekDay, i) => {
          return (
            <div
              key={`${weekDay}-${i}`}
              className="flex h-10 w-10 items-center justify-center text-xl font-bold text-zinc-400"
            >
              {weekDay}
            </div>
          )
        })}
      </div>

      <div className="grid grid-flow-col grid-rows-7 gap-2">
        {summaryDates.map((date) => {
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
        })}
      </div>
    </div>
  )
}
