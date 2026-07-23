import { Check, Circle } from 'lucide-react'
import type { Meal } from '../types'

interface Props { meal: Meal; completed: boolean; onToggle: () => void }

export function MealCard({ meal, completed, onToggle }: Props) {
  return (
    <article className={`meal-card ${completed ? 'completed' : ''}`}>
      <button className="meal-check" aria-pressed={completed} aria-label={`${meal.title}, ${completed ? 'markera som inte klar' : 'markera som klar'}`} onClick={onToggle}>
        {completed ? <Check size={19} /> : <Circle size={19} />}
      </button>
      <div className="meal-content">
        <div className="meal-heading"><h3>{meal.title}</h3>{meal.optional && <span className="optional-badge">Valfritt</span>}<span className="protein-badge">≈ {meal.proteinLabel ?? `${meal.protein} g`} protein</span></div>
        <ul>{meal.items.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </article>
  )
}
