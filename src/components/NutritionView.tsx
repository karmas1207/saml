import { CalendarDays, Clock3, ShoppingCart, Sparkles, Target } from 'lucide-react'
import { useState } from 'react'
import { nutritionDays } from '../data/meals'
import type { AppData, DayId } from '../types'
import { DailyRoutine } from './DailyRoutine'
import { DaySelector } from './DaySelector'
import { NutritionDay } from './NutritionDay'
import { NutritionTargets } from './NutritionTargets'
import { ResultsCard } from './ResultsCard'
import { ShoppingList } from './ShoppingList'
import { WeightTracker } from './WeightTracker'

type NutritionSection = 'menu' | 'routine' | 'shopping' | 'targets' | 'results'

const sections = [
  { id: 'menu', label: 'Veckomeny', icon: CalendarDays },
  { id: 'routine', label: 'Rutin', icon: Clock3 },
  { id: 'shopping', label: 'Inköp', icon: ShoppingCart },
  { id: 'targets', label: 'Mål', icon: Target },
  { id: 'results', label: 'Resultat', icon: Sparkles },
] satisfies { id: NutritionSection; label: string; icon: typeof CalendarDays }[]

interface Props { data: AppData; onChange: (updater: (current: AppData) => AppData) => void }

const makeId = () => globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`

export function NutritionView({ data, onChange }: Props) {
  const [section, setSection] = useState<NutritionSection>('menu')
  const setDay = (selectedNutritionDay: DayId) => onChange((current) => ({ ...current, selectedNutritionDay }))
  const toggleRecord = (record: keyof Pick<AppData, 'completedMeals' | 'completedRoutine' | 'shoppingChecked'>, key: string) => onChange((current) => ({ ...current, [record]: { ...current[record], [key]: !current[record][key] } }))
  const showDaySelector = section === 'menu' || section === 'routine' || section === 'targets'

  return (
    <main id="main-content" className="page-content">
      <div className="view-intro"><span className="eyebrow"><Target size={15} /> Kostplan</span><h2>Enkelt, billigt, hållbart.</h2><p>Bygg måltiderna kring protein och följ vikttrenden – inte perfektion.</p></div>
      <nav className="subnav" aria-label="Kostsektioner">
        {sections.map(({ id, label, icon: Icon }) => <button key={id} className={section === id ? 'active' : ''} aria-current={section === id ? 'page' : undefined} onClick={() => setSection(id)}><Icon size={17} /><span>{label}</span></button>)}
      </nav>
      {showDaySelector && <DaySelector days={nutritionDays} selected={data.selectedNutritionDay} onSelect={setDay} label="Välj dag för kostplanen" />}

      <div className="nutrition-panel" role="region" aria-live="polite">
        {section === 'menu' && <NutritionDay dayId={data.selectedNutritionDay} data={data} onToggleMeal={(mealId) => toggleRecord('completedMeals', `${data.selectedNutritionDay}:${mealId}`)} />}
        {section === 'routine' && <DailyRoutine dayId={data.selectedNutritionDay} data={data} onToggle={(id) => toggleRecord('completedRoutine', `${data.selectedNutritionDay}:${id}`)} />}
        {section === 'shopping' && <ShoppingList data={data} onToggle={(id) => toggleRecord('shoppingChecked', id)} onAdd={(label) => onChange((current) => ({ ...current, customShoppingItems: [...current.customShoppingItems, { id: makeId(), label }] }))} onRemove={(id) => onChange((current) => { const shoppingChecked = { ...current.shoppingChecked }; delete shoppingChecked[`custom:${id}`]; return { ...current, shoppingChecked, customShoppingItems: current.customShoppingItems.filter((item) => item.id !== id) } })} onReset={() => onChange((current) => ({ ...current, shoppingChecked: {} }))} />}
        {section === 'targets' && <NutritionTargets data={data} dayId={data.selectedNutritionDay} />}
        {section === 'results' && <><WeightTracker entries={data.weights} onAdd={(entry) => onChange((current) => ({ ...current, weights: [...current.weights, { ...entry, id: makeId() }] }))} onRemove={(id) => onChange((current) => ({ ...current, weights: current.weights.filter((entry) => entry.id !== id) }))} /><ResultsCard /></>}
      </div>
    </main>
  )
}
