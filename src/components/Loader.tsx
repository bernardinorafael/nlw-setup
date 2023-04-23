import { SpinnerGap } from '@phosphor-icons/react'

export function Loader() {
  return (
    <div className="flex h-full min-h-[100px] w-full animate-spin items-center justify-center">
      <SpinnerGap weight="bold" size={28} />
    </div>
  )
}
