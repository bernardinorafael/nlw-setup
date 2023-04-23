import headerLogoHabit from '@/assets/habit-header-icon.svg'
import { Plus } from '@phosphor-icons/react'
import { Dialog } from './primitives/Dialog'
import { CreateHabitForm } from './CreateHabitForm'

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-3xl items-center justify-between">
      <img src={headerLogoHabit} alt="logotipo Habits" />

      <Dialog title="Criar hábito" render={<CreateHabitForm />}>
        <button
          className="flex cursor-default items-center justify-center gap-2 rounded-full border-none bg-violet-800 px-4 py-2 font-semibold outline-2 outline-offset-2 outline-violet-800 hover:bg-violet-700 hover:transition-all focus:outline focus:transition-none"
          type="button"
        >
          <Plus weight="bold" size={20} />
          Novo hábito
        </button>
      </Dialog>
    </header>
  )
}
