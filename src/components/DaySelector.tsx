import type { DayId } from '../types'

interface DayOption { id: DayId; name: string; shortName: string }

interface Props {
  days: DayOption[]
  selected: DayId
  onSelect: (day: DayId) => void
  label: string
}

export function DaySelector({ days, selected, onSelect, label }: Props) {
  return (
    <div className="day-selector" role="tablist" aria-label={label}>
      {days.map((day) => (
        <button
          key={day.id}
          role="tab"
          aria-selected={selected === day.id}
          className={selected === day.id ? 'selected' : ''}
          onClick={() => onSelect(day.id)}
        >
          <span className="day-full">{day.name}</span>
          <span className="day-short">{day.shortName}</span>
        </button>
      ))}
    </div>
  )
}
