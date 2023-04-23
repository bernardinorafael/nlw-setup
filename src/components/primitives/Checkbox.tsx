import { CheckFat } from '@phosphor-icons/react'
import * as CheckboxComponent from '@radix-ui/react-checkbox'

export function Checkbox(props: CheckboxComponent.CheckboxProps) {
  return (
    <CheckboxComponent.Root
      className="flex aspect-square h-[25px] items-center justify-center rounded border border-zinc-700 outline-2 outline-offset-2 outline-green-800 transition-colors focus:outline data-[state=checked]:border-none data-[state=checked]:bg-green-900 data-[disabled]:opacity-40"
      {...props}
    >
      <CheckboxComponent.Indicator className="">
        <CheckFat size={18} weight="fill" />
      </CheckboxComponent.Indicator>
    </CheckboxComponent.Root>
  )
}
