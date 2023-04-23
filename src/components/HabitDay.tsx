import * as PopoverComponent from '@radix-ui/react-popover'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { HabitsList } from './HabitsList'
import { ProgressBar } from './ProgressBar'

interface HabitDayProps extends PopoverComponent.PopoverProps {
  completed?: number
  amount?: number
  date: Date
}

export function HabitDay(props: HabitDayProps) {
  const { amount = 0, completed = 0, date, ...rest } = props

  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0

  const shortTodayDate = dayjs(date).format('DD[/]MMM')
  const weekDayLong = dayjs(date).format('dddd')

  return (
    <PopoverComponent.Root {...rest}>
      <PopoverComponent.Trigger
        className={clsx('aspect-square h-8 rounded-md border-2', {
          'border-zinc-800 bg-zinc-900': completedPercentage === 0,
          'border-violet-800 bg-violet-900':
            completedPercentage > 0 && completedPercentage < 20,
          'border-violet-700 bg-violet-800':
            completedPercentage >= 20 && completedPercentage < 40,
          'border-violet-600 bg-violet-700':
            completedPercentage >= 40 && completedPercentage < 60,
          'border-violet-500 bg-violet-600':
            completedPercentage >= 60 && completedPercentage < 80,
          'border-violet-400 bg-violet-500': completedPercentage > 80,
        })}
      />

      <PopoverComponent.Portal>
        <PopoverComponent.Content
          className="flex w-[374px] flex-col gap-2 rounded border border-zinc-800 bg-zinc-900 p-4 shadow-2xl data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
          arrowPadding={10}
        >
          <PopoverComponent.Arrow
            className="fill fill-zinc-900"
            height={7}
            width={14}
          />

          <span className="ext-sm font-medium text-zinc-500">{weekDayLong}</span>
          <span className="text-3xl font-bold leading-tight">{shortTodayDate}</span>

          <ProgressBar progress={completedPercentage} />

          <HabitsList date={date} />
        </PopoverComponent.Content>
      </PopoverComponent.Portal>
    </PopoverComponent.Root>
  )
}
