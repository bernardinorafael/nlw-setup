import { X } from '@phosphor-icons/react'
import * as DialogComponent from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

interface DialogComponentProps extends DialogComponent.DialogProps {
  children: ReactNode
  render: ReactNode
  title: string
}

export function Dialog({ children, render, ...props }: DialogComponentProps) {
  return (
    <DialogComponent.Root {...props}>
      <DialogComponent.Trigger asChild>{children}</DialogComponent.Trigger>

      <DialogComponent.Portal>
        <DialogComponent.Overlay className="fixed inset-0 z-40 backdrop-blur-sm" />

        <DialogComponent.Content className="fixed left-[50%] top-[50%] z-50 max-h-[95vh] w-[90vw] max-w-[419px] translate-x-[-50%] translate-y-[-50%] rounded-lg border border-zinc-800 bg-zinc-900 p-6 data-[state=open]:animate-contentShow">
          <DialogComponent.Close className="absolute right-3 top-3 flex cursor-default flex-col items-center gap-4 rounded-lg p-1 hover:bg-zinc-800">
            <X size={22} weight="bold" aria-label="Fechar" />
          </DialogComponent.Close>

          <DialogComponent.Title className="text-3xl font-semibold">
            {props.title}
          </DialogComponent.Title>

          {render}
        </DialogComponent.Content>
      </DialogComponent.Portal>
    </DialogComponent.Root>
  )
}
