import * as React from 'react'

import { Checkbox } from './primitives/Checkbox'
import { ZodNullable } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { queryClient } from '@/lib/react-query'

export function CreateHabitForm() {
  const [title, setTitle] = React.useState('')
  const [weekDaysAmount, setWeekDaysAmount] = React.useState<number[]>([])

  const createHabit = useMutation(
    async () => {
      await api.post('/', { title, weekDays: weekDaysAmount })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['summary'])
        setTitle('')
        setWeekDaysAmount([])
      },
    },
  )

  const createNewHabit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!title || weekDaysAmount.length === 0) {
      return ZodNullable
    }

    await createHabit.mutateAsync()
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDaysAmount.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDaysAmount.filter((day) => day !== weekDay)
      setWeekDaysAmount(weekDaysWithRemovedOne)
    } else {
      setWeekDaysAmount((state) => [...state, weekDay])
    }
  }

  const weekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ]

  return (
    <form className="mt-4 flex flex-col gap-4" onSubmit={createNewHabit}>
      <label className="flex flex-col gap-2 text-sm font-medium">
        Qual seu compromentimento?
        <input
          className="h-10 rounded border border-zinc-800 bg-transparent px-2 outline-2 outline-offset-2 outline-violet-800 placeholder:text-zinc-500 focus:outline"
          placeholder="Exercícios, dormir bem, etc..."
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          type="text"
          autoFocus
        />
      </label>

      <div className="flex flex-col items-start gap-4">
        <strong className="text-lg">Qual recorrência?</strong>

        {weekDays.map((weekDay, index) => {
          return (
            <label
              className="flex cursor-default select-none flex-row items-center gap-2 text-sm font-extrabold"
              key={`${weekDay}-${index}`}
            >
              <Checkbox
                checked={weekDaysAmount.includes(index)}
                onCheckedChange={() => handleToggleWeekDay(index)}
              />
              {weekDay}
            </label>
          )
        })}
      </div>

      <button className="mt-6 flex h-10 w-full cursor-default items-center justify-center gap-2 rounded bg-green-700 font-semibold outline-2 outline-offset-2 outline-green-800 hover:bg-green-600 hover:transition-all focus:outline focus:transition-none">
        Confirmar
      </button>
    </form>
  )
}
