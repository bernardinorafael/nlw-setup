import * as TooltipComponent from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

interface TooltipComponentProps extends TooltipComponent.TooltipProps {
  children: ReactNode
  render: ReactNode
}

export function Tooltip({ children, render, ...rest }: TooltipComponentProps) {
  return (
    <TooltipComponent.Root {...rest}>
      <TooltipComponent.Trigger asChild>{children}</TooltipComponent.Trigger>

      <TooltipComponent.Portal>
        <TooltipComponent.Content
          className="rounded bg-zinc-800 p-3 text-xs font-semibold shadow-2xl"
          sideOffset={5}
        >
          <TooltipComponent.Arrow
            className="fill fill-zinc-800"
            width={12}
            height={6}
          />

          {render}
        </TooltipComponent.Content>
      </TooltipComponent.Portal>
    </TooltipComponent.Root>
  )
}
