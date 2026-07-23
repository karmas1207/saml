import { Check, Plus, RotateCcw, ShoppingBasket, Trash2 } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { shoppingItems } from '../data/shoppingList'
import type { AppData } from '../types'

interface Props {
  data: AppData
  onToggle: (id: string) => void
  onAdd: (label: string) => void
  onRemove: (id: string) => void
  onReset: () => void
}

export function ShoppingList({ data, onToggle, onAdd, onRemove, onReset }: Props) {
  const [label, setLabel] = useState('')
  const allCount = shoppingItems.length + data.customShoppingItems.length
  const checkedCount = [...shoppingItems.map((item) => item.id), ...data.customShoppingItems.map((item) => `custom:${item.id}`)].filter((id) => data.shoppingChecked[id]).length
  const remaining = allCount - checkedCount

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const value = label.trim()
    if (!value) return
    onAdd(value)
    setLabel('')
  }

  return (
    <section aria-labelledby="shopping-title">
      <div className="section-heading"><div><span className="eyebrow">För en vecka</span><h2 id="shopping-title">Inköpslista</h2></div><span className="remaining-badge"><ShoppingBasket size={16} /> {remaining} kvar</span></div>
      <div className="shopping-list">
        {shoppingItems.map((item) => {
          const checked = Boolean(data.shoppingChecked[item.id])
          return <button key={item.id} className={checked ? 'checked' : ''} aria-pressed={checked} onClick={() => onToggle(item.id)}><span className="big-check">{checked && <Check size={16} />}</span><span>{item.label}{item.optional && <small>Valfritt</small>}</span></button>
        })}
        {data.customShoppingItems.map((item) => {
          const key = `custom:${item.id}`
          const checked = Boolean(data.shoppingChecked[key])
          return <div className={`custom-shopping-row ${checked ? 'checked' : ''}`} key={item.id}><button aria-pressed={checked} onClick={() => onToggle(key)}><span className="big-check">{checked && <Check size={16} />}</span><span>{item.label}<small>Egen vara</small></span></button><button className="icon-button" aria-label={`Ta bort ${item.label}`} onClick={() => onRemove(item.id)}><Trash2 size={18} /></button></div>
        })}
      </div>
      <form className="add-item-form" onSubmit={submit}>
        <label><span className="sr-only">Lägg till egen vara</span><input value={label} maxLength={80} onChange={(event) => setLabel(event.target.value)} placeholder="Lägg till egen vara…" /></label>
        <button className="primary-button" type="submit"><Plus size={18} /> Lägg till</button>
      </form>
      <button className="reset-button" onClick={onReset}><RotateCcw size={18} /> Återställ inköpslistan</button>
    </section>
  )
}
