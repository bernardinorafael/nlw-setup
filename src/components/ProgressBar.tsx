interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <div className=" my-3 h-3 w-full rounded-xl bg-zinc-800">
      <div
        className="h-3 rounded-xl bg-violet-600 transition-all duration-500 ease-in-out"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={props.progress}
        role="progressbar"
        style={{ width: `${props.progress}%` }}
      />
    </div>
  )
}
