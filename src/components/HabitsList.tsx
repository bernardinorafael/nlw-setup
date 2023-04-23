import { useMutation, useQuery } from '@tanstack/react-query'
import { Checkbox } from './primitives/Checkbox'
import { api } from '@/lib/axios'
import { Loader } from './Loader'
import dayjs from 'dayjs'
import { queryClient } from '@/lib/react-query'
import clsx from 'clsx'

interface HabitsListProps {
  date: Date
}

interface HabitsInfo {
  completedHabits: string[]
  possibleHabits: Array<{
    id: string
    title: string
    created_at: Date
  }>
}

export function HabitsList(props: HabitsListProps) {
  const day = useQuery(['day'], async (): Promise<HabitsInfo> => {
    const response = await api.get('day', {
      params: {
        date: props.date.toISOString(),
      },
    })

    return response.data
  })

  const toggleHabit = useMutation(
    async (habitId: string) => {
      await api.patch(`/${habitId}/toggle`)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['day'])
        queryClient.invalidateQueries(['summary'])
      },
    },
  )

  const isDateInPast = dayjs(props.date).endOf('day').isBefore(new Date())

  return (
    <div className="flex flex-col items-start gap-3">
      {day.isLoading ? (
        <Loader />
      ) : (
        <>
          {day.data?.possibleHabits.length! > 0 ? (
            day.data?.possibleHabits.map((habit) => {
              return (
                <label
                  key={habit.id}
                  className={clsx(
                    'flex cursor-default select-none flex-row items-center gap-2 text-sm font-bold',
                    { 'opacity-30': isDateInPast },
                  )}
                >
                  <Checkbox
                    disabled={isDateInPast}
                    checked={day.data.completedHabits.includes(habit.id)}
                    onCheckedChange={() => toggleHabit.mutate(habit.id)}
                  />
                  {habit.title}
                </label>
              )
            })
          ) : (
            <div
              className={clsx('flex w-full items-center justify-center', {
                'opacity-30': isDateInPast,
              })}
            >
              <strong>Nenhum hábito encontrado.</strong>
            </div>
          )}
        </>
      )}
    </div>
  )
}
