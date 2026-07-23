import { CheckCircle2, Dumbbell, Footprints, Layers3, TrendingUp } from 'lucide-react'
import { strengthDays } from '../data/workouts'
import type { AppData } from '../types'

export function WeeklyProgress({ data }: { data: AppData }) {
  const allExercises = strengthDays.flatMap((day) => day.exercises.map((exercise) => ({ day: day.id, exercise })))
  const allSets = allExercises.flatMap(({ day, exercise }) => Array.from({ length: exercise.sets }, (_, index) => `${day}:${exercise.id}:${index}`))
  const completedExercises = allExercises.filter(({ day, exercise }) => data.completedExercises[`${day}:${exercise.id}`]).length
  const completedSets = allSets.filter((key) => data.completedSets[key]).length
  const completedWorkouts = strengthDays.filter((day) => day.exercises.every((exercise) => data.completedExercises[`${day.id}:${exercise.id}`])).length
  const completedWalks = ['wednesday:walk', 'saturday:walk'].filter((key) => data.activities[key]).length
  const totalProgressItems = allSets.length + 2
  const progress = Math.round(((completedSets + completedWalks) / totalProgressItems) * 100)

  const stats = [
    { icon: CheckCircle2, value: `${completedWorkouts}/4`, label: 'Pass' },
    { icon: Dumbbell, value: completedExercises, label: 'Övningar' },
    { icon: Layers3, value: completedSets, label: 'Set' },
    { icon: Footprints, value: completedWalks, label: 'Promenader' },
  ]

  return (
    <section className="progress-card" aria-labelledby="weekly-progress-title">
      <div className="section-heading compact">
        <div><span className="eyebrow">Veckosammanställning</span><h2 id="weekly-progress-title">Din utveckling</h2></div>
        <span className="trend-badge"><TrendingUp size={15} /> {progress}%</span>
      </div>
      <div className="progress-track" role="progressbar" aria-label="Veckans framsteg" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
        <span style={{ width: `${progress}%` }} />
      </div>
      <div className="progress-stats">
        {stats.map(({ icon: Icon, value, label }) => <div key={label}><Icon size={18} /><strong>{value}</strong><span>{label}</span></div>)}
      </div>
    </section>
  )
}
