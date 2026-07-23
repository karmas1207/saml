import { Check } from 'lucide-react'

interface Props {
  exerciseName: string
  count: number
  completed: boolean[]
  onToggle: (index: number) => void
}

export function SetTracker({ exerciseName, count, completed, onToggle }: Props) {
  return (
    <div>
      <div className="label-row"><span className="field-label">Markera set</span><span>{completed.filter(Boolean).length}/{count} klara</span></div>
      <div className="set-tracker">
        {Array.from({ length: count }, (_, index) => (
          <button
            key={index}
            className={completed[index] ? 'done' : ''}
            aria-label={`${exerciseName}, set ${index + 1}${completed[index] ? ' klart' : ''}`}
            aria-pressed={completed[index]}
            onClick={() => onToggle(index)}
          >
            {completed[index] ? <Check size={16} /> : index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
