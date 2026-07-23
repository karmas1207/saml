import { Scale, Trash2, TrendingDown, TrendingUp } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import type { WeightEntry } from '../types'

interface Props { entries: WeightEntry[]; onAdd: (entry: Omit<WeightEntry, 'id'>) => void; onRemove: (id: string) => void }

const today = () => {
  const date = new Date()
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export function WeightTracker({ entries, onAdd, onRemove }: Props) {
  const [date, setDate] = useState(today())
  const [weight, setWeight] = useState('')
  const [note, setNote] = useState('')
  const sorted = [...entries].sort((a, b) => a.date.localeCompare(b.date))
  const start = sorted[0]?.weight
  const latest = sorted.at(-1)?.weight
  const change = start !== undefined && latest !== undefined ? latest - start : 0

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const value = Number(weight.replace(',', '.'))
    if (!date || !Number.isFinite(value) || value < 20 || value > 400) return
    onAdd({ date, weight: Math.round(value * 10) / 10, note: note.trim() })
    setWeight('')
    setNote('')
  }

  return (
    <section aria-labelledby="weight-title">
      <div className="section-heading"><div><span className="eyebrow">Följ trenden</span><h2 id="weight-title">Viktutveckling</h2></div><Scale /></div>
      <div className="weight-stats">
        <div><span>Startvikt</span><strong>{start !== undefined ? `${start.toFixed(1)} kg` : '—'}</strong></div>
        <div><span>Senaste</span><strong>{latest !== undefined ? `${latest.toFixed(1)} kg` : '—'}</strong></div>
        <div><span>Förändring</span><strong className={change >= 0 ? 'positive' : 'negative'}>{change > 0 ? '+' : ''}{entries.length ? change.toFixed(1) : '—'}{entries.length ? ' kg' : ''} {entries.length > 1 && (change >= 0 ? <TrendingUp size={15} /> : <TrendingDown size={15} />)}</strong></div>
      </div>
      <form className="weight-form" onSubmit={submit}>
        <label><span>Datum</span><input type="date" value={date} onChange={(event) => setDate(event.target.value)} required /></label>
        <label><span>Kroppsvikt (kg)</span><input inputMode="decimal" value={weight} onChange={(event) => setWeight(event.target.value)} placeholder="Till exempel 78,5" required /></label>
        <label className="wide"><span>Anteckning <small>(valfritt)</small></span><input value={note} maxLength={120} onChange={(event) => setNote(event.target.value)} placeholder="Till exempel morgonvikt" /></label>
        <button className="primary-button wide" type="submit">Spara vikt</button>
      </form>
      {sorted.length ? <div className="weight-list">{[...sorted].reverse().map((entry) => <div key={entry.id}><span><strong>{entry.weight.toFixed(1)} kg</strong><time dateTime={entry.date}>{new Intl.DateTimeFormat('sv-SE', { dateStyle: 'medium' }).format(new Date(`${entry.date}T12:00:00`))}</time>{entry.note && <small>{entry.note}</small>}</span><button className="icon-button" aria-label={`Ta bort vikt från ${entry.date}`} onClick={() => onRemove(entry.id)}><Trash2 size={17} /></button></div>)}</div> : <p className="empty-state">Din första viktregistrering visas här.</p>}
    </section>
  )
}
