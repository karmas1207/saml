import { Dumbbell } from 'lucide-react'

export function Header() {
  return (
    <header className="site-header">
      <div className="brand-mark" aria-hidden="true"><Dumbbell size={22} /></div>
      <div>
        <p className="eyebrow">Din veckoplan</p>
        <h1>Workout 4 Karo</h1>
        <p>Hemmaträning och kostplan för muskeluppbyggnad</p>
      </div>
    </header>
  )
}
