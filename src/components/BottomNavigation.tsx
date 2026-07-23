import { Dumbbell, Utensils } from 'lucide-react'

export type MainTab = 'training' | 'nutrition'

interface Props {
  active: MainTab
  onChange: (tab: MainTab) => void
}

export function BottomNavigation({ active, onChange }: Props) {
  return (
    <nav className="bottom-nav" aria-label="Huvudnavigering">
      <button className={active === 'training' ? 'active' : ''} aria-current={active === 'training' ? 'page' : undefined} onClick={() => onChange('training')}>
        <Dumbbell size={21} /><span>Träning</span>
      </button>
      <button className={active === 'nutrition' ? 'active' : ''} aria-current={active === 'nutrition' ? 'page' : undefined} onClick={() => onChange('nutrition')}>
        <Utensils size={21} /><span>Kost</span>
      </button>
    </nav>
  )
}
