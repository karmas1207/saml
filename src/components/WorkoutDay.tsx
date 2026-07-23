import { Check, Clock3, Footprints, HeartPulse, Moon, RotateCcw } from 'lucide-react'
import type { AppData, WorkoutDay as WorkoutDayType } from '../types'
import { ExerciseCard } from './ExerciseCard'

interface Props {
  day: WorkoutDayType
  data: AppData
  onToggleExercise: (exerciseId: string) => void
  onToggleSet: (exerciseId: string, setIndex: number) => void
  onNoteChange: (exerciseId: string, note: string) => void
  onToggleActivity: (activityId: string, exclusive?: boolean) => void
  onResetDay: () => void
}

export function WorkoutDay({ day, data, onToggleExercise, onToggleSet, onNoteChange, onToggleActivity, onResetDay }: Props) {
  const typeLabel = day.type === 'strength' ? 'Träningsdag' : day.type === 'recovery' ? 'Aktiv återhämtning' : 'Vilodag'
  const TypeIcon = day.type === 'strength' ? HeartPulse : day.type === 'recovery' ? Footprints : Moon

  return (
    <div role="tabpanel" aria-label={`${day.name}: ${day.title}`}>
      <section className={`day-hero ${day.type}`}>
        <div className="day-hero-top"><span className="day-kicker">{day.name}</span><span className="type-badge"><TypeIcon size={15} /> {typeLabel}</span></div>
        <h2>{day.title}</h2>
        <div className="muscle-tags">{day.muscles.map((muscle) => <span key={muscle}>{muscle}</span>)}</div>
        <div className="day-meta">
          <span><Clock3 size={17} /> {day.duration}</span>
          <span><HeartPulse size={17} /> {day.exercises.length ? `${day.exercises.length} övningar` : typeLabel}</span>
        </div>
      </section>

      {day.message && <blockquote className="day-message">“{day.message}”</blockquote>}

      {day.activities && (
        <section className="activity-card" aria-labelledby="activities-title">
          <div className="section-heading compact"><div><span className="eyebrow">Dagens plan</span><h2 id="activities-title">Aktiviteter</h2></div></div>
          <div className="activity-list">
            {day.activities.map((activity) => {
              const key = `${day.id}:${activity.id}`
              const checked = Boolean(data.activities[key])
              return (
                <button key={activity.id} className={checked ? 'checked' : ''} aria-pressed={checked} onClick={() => onToggleActivity(activity.id, activity.exclusive)}>
                  <span className="big-check">{checked && <Check size={17} />}</span>
                  <span><strong>{activity.label}</strong>{activity.detail && <small>{activity.detail}</small>}</span>
                </button>
              )
            })}
          </div>
        </section>
      )}

      {day.exercises.length > 0 && (
        <section className="exercise-section" aria-labelledby="exercise-title">
          <div className="section-heading"><div><span className="eyebrow">Dagens pass</span><h2 id="exercise-title">{day.exercises.length} övningar</h2></div><span className="section-count">{day.exercises.filter((exercise) => data.completedExercises[`${day.id}:${exercise.id}`]).length}/{day.exercises.length} klara</span></div>
          <div className="exercise-list">
            {day.exercises.map((exercise) => {
              const key = `${day.id}:${exercise.id}`
              const completed = Boolean(data.completedExercises[key])
              return <ExerciseCard key={`${exercise.id}:${completed}`} exercise={exercise} completed={completed} sets={Array.from({ length: exercise.sets }, (_, index) => Boolean(data.completedSets[`${key}:${index}`]))} note={data.notes[key] ?? ''} onToggleExercise={() => onToggleExercise(exercise.id)} onToggleSet={(setIndex) => onToggleSet(exercise.id, setIndex)} onNoteChange={(note) => onNoteChange(exercise.id, note)} />
            })}
          </div>
        </section>
      )}

      <button className="reset-button" onClick={onResetDay}><RotateCcw size={18} /> Återställ dagens pass</button>
    </div>
  )
}
