import { Check, Clock3 } from 'lucide-react'
import { routineItems } from '../data/meals'
import type { AppData, DayId } from '../types'

interface Props { dayId: DayId; data: AppData; onToggle: (id: string) => void }

export function DailyRoutine({ dayId, data, onToggle }: Props) {
  return (
    <section aria-labelledby="routine-title">
      <div className="section-heading"><div><span className="eyebrow">Enkel rytm</span><h2 id="routine-title">Daglig rutin</h2></div></div>
      <div className="timeline">
        {routineItems.map((item, index) => {
          const completed = Boolean(data.completedRoutine[`${dayId}:${item.id}`])
          return (
            <button key={item.id} className={completed ? 'completed' : ''} aria-pressed={completed} onClick={() => onToggle(item.id)}>
              <span className="timeline-time"><Clock3 size={15} /> {item.time}</span>
              <span className="timeline-dot">{completed ? <Check size={15} /> : index + 1}</span>
              <strong>{item.label}</strong>
            </button>
          )
        })}
      </div>
    </section>
  )
}
