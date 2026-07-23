import { ChevronDown, ShieldCheck } from 'lucide-react'

const rules = [
  'Träna 4 dagar per vecka.',
  'Vila 60–90 sekunder mellan set.',
  'Utför rörelsen långsamt, cirka 3 sekunder på vägen ner.',
  'Gå till 1–2 repetitioner från failure på varje set.',
  'När du klarar över 20–25 repetitioner med god teknik: gör övningen långsammare eller lägg till ett extra set.',
  'Prioritera korrekt teknik framför hastighet.',
  'Avbryt en övning vid skarp eller onormal smärta.',
]

export function RulesCard() {
  return (
    <details className="details-card">
      <summary><span><ShieldCheck size={20} /> Grundregler</span><ChevronDown className="chevron" size={20} /></summary>
      <ul>{rules.map((rule) => <li key={rule}>{rule}</li>)}</ul>
    </details>
  )
}
