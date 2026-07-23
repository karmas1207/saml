import { Check, ChevronDown, ChevronUp, CircleAlert, Dumbbell, Target } from 'lucide-react'
import { useState } from 'react'
import type { Exercise } from '../types'
import { ExerciseIllustration } from './ExerciseIllustration'
import { RestTimer } from './RestTimer'
import { SetTracker } from './SetTracker'

interface Props {
  exercise: Exercise
  completed: boolean
  sets: boolean[]
  note: string
  onToggleExercise: () => void
  onToggleSet: (setIndex: number) => void
  onNoteChange: (note: string) => void
}

export function ExerciseCard({ exercise, completed, sets, note, onToggleExercise, onToggleSet, onNoteChange }: Props) {
  const [expanded, setExpanded] = useState(!completed)

  return (
    <article className={`exercise-card ${completed ? 'completed' : ''} ${expanded ? 'expanded' : 'collapsed'}`}>
      <div className="exercise-head">
        <div>
          <span className="exercise-index"><Dumbbell size={15} /> {exercise.muscles.join(' · ')}</span>
          <h3>{exercise.name}</h3>
        </div>
        <div className="exercise-actions">
          <button className={`complete-button ${completed ? 'done' : ''}`} aria-label={`${exercise.name}: ${completed ? 'markera som inte klar' : 'markera som klar'}`} aria-pressed={completed} onClick={onToggleExercise}>
            <Check size={18} /><span>{completed ? 'Klar' : 'Markera klar'}</span>
          </button>
          <button className="expand-button" aria-label={`${expanded ? 'Dölj' : 'Visa'} innehållet för ${exercise.name}`} aria-expanded={expanded} onClick={() => setExpanded((value) => !value)}>
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            <span>{expanded ? 'Dölj' : 'Visa'}</span>
          </button>
        </div>
      </div>

      {!expanded && <p className="collapsed-summary">{exercise.sets} set · {exercise.reps} · {sets.filter(Boolean).length}/{exercise.sets} set klara</p>}

      {expanded && <div className="exercise-body">
        <div className="exercise-stats">
          <div><span>Set</span><strong>{exercise.sets}</strong></div>
          <div><span>Reps / tid</span><strong>{exercise.reps}</strong></div>
          <div><span>Vila</span><strong>{exercise.rest}</strong></div>
        </div>

        <p className="equipment"><Dumbbell size={16} /> {exercise.equipment}</p>
        <p className="instruction">{exercise.instruction}</p>
        <ExerciseIllustration type={exercise.illustration} exerciseName={exercise.name} />

        <details className="technique-details">
          <summary><span><Target size={17} /> Teknik och vanliga misstag</span><ChevronDown size={18} /></summary>
          <div className="technique-grid">
            <p><strong>Teknik</strong>{exercise.technique}</p>
            <p className="mistake"><strong><CircleAlert size={15} /> Undvik</strong>{exercise.mistakes}</p>
          </div>
        </details>

        <SetTracker exerciseName={exercise.name} count={exercise.sets} completed={sets} onToggle={onToggleSet} />
        <RestTimer />
        <label className="note-field">
          <span>Kort anteckning</span>
          <textarea value={note} onChange={(event) => onNoteChange(event.target.value)} maxLength={300} rows={2} placeholder="Exempel: Bra teknik, öka tempot nästa gång…" />
        </label>
      </div>}
    </article>
  )
}
