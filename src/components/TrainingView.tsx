import { CalendarRange, RefreshCw } from 'lucide-react'
import { useState } from 'react'
import { workoutByDay, workouts } from '../data/workouts'
import type { AppData, DayId } from '../types'
import { ConfirmDialog } from './ConfirmDialog'
import { DaySelector } from './DaySelector'
import { RulesCard } from './RulesCard'
import { WeeklyProgress } from './WeeklyProgress'
import { WorkoutDay } from './WorkoutDay'

interface Props {
  data: AppData
  onChange: (updater: (current: AppData) => AppData) => void
  onStartNewWeek: () => void
}

export function TrainingView({ data, onChange, onStartNewWeek }: Props) {
  const [confirmOpen, setConfirmOpen] = useState(false)
  const day = workoutByDay[data.selectedWorkoutDay]
  const prefix = `${day.id}:`

  const setDay = (selectedWorkoutDay: DayId) => onChange((current) => ({ ...current, selectedWorkoutDay }))
  const toggleInRecord = (record: keyof Pick<AppData, 'completedExercises' | 'completedSets' | 'activities'>, key: string) => onChange((current) => ({ ...current, [record]: { ...current[record], [key]: !current[record][key] } }))

  const resetDay = () => onChange((current) => {
    const withoutPrefix = <T,>(record: Record<string, T>) => Object.fromEntries(Object.entries(record).filter(([key]) => !key.startsWith(prefix)))
    return { ...current, completedExercises: withoutPrefix(current.completedExercises), completedSets: withoutPrefix(current.completedSets), notes: withoutPrefix(current.notes), activities: withoutPrefix(current.activities) }
  })

  const toggleActivity = (activityId: string, exclusive?: boolean) => onChange((current) => {
    const key = `${day.id}:${activityId}`
    let activities = { ...current.activities }
    if (exclusive && !activities[key]) {
      day.activities?.filter((activity) => activity.exclusive).forEach((activity) => { delete activities[`${day.id}:${activity.id}`] })
    }
    activities = { ...activities, [key]: !activities[key] }
    return { ...current, activities }
  })

  return (
    <main id="main-content" className="page-content">
      <div className="view-intro"><span className="eyebrow"><CalendarRange size={15} /> Träningsplan</span><h2>Vad tränar vi idag?</h2><p>Välj dag, följ passet och bocka av ett set i taget.</p></div>
      <DaySelector days={workouts} selected={day.id} onSelect={setDay} label="Välj träningsdag" />
      <WorkoutDay
        day={day}
        data={data}
        onToggleExercise={(exerciseId) => toggleInRecord('completedExercises', `${day.id}:${exerciseId}`)}
        onToggleSet={(exerciseId, setIndex) => toggleInRecord('completedSets', `${day.id}:${exerciseId}:${setIndex}`)}
        onNoteChange={(exerciseId, note) => onChange((current) => ({ ...current, notes: { ...current.notes, [`${day.id}:${exerciseId}`]: note } }))}
        onToggleActivity={toggleActivity}
        onResetDay={resetDay}
      />
      <RulesCard />
      <WeeklyProgress data={data} />
      <button className="new-week-button" onClick={() => setConfirmOpen(true)}><RefreshCw size={19} /> Starta ny vecka</button>
      <ConfirmDialog open={confirmOpen} title="Starta en ny vecka?" description="Alla markeringar för träning, måltider, rutin och inköp återställs. Anteckningar för passen tas bort, men din viktlogg sparas." confirmLabel="Ja, starta om" onClose={() => setConfirmOpen(false)} onConfirm={() => { onStartNewWeek(); setConfirmOpen(false) }} />
    </main>
  )
}
