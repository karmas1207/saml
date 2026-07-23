import { Lightbulb, Moon, Sparkles, TrendingUp } from 'lucide-react'

const tips = [
  'Köp storpack och jämför kilopris.',
  'Använd frysta grönsaker för lägre pris och längre hållbarhet.',
  'Tillaga flera portioner samtidigt.',
  'Kycklinglårfilé är ofta billigare än kycklingbröst.',
  'Ägg, havregryn, linser, bönor, kvarg och tonfisk är enkla proteinkällor.',
  'Justera mängden ris, pasta, havregryn eller potatis om vikten inte ökar.',
  'Om vikten inte ökar efter två veckor, lägg till cirka 200 kcal per dag.',
  'Sikta på en långsam viktuppgång snarare än snabb fettökning.',
  'Drick tillräckligt med vatten.',
  'Prioritera 7,5–9 timmars sömn.',
]

export function ResultsCard() {
  return (
    <div className="results-stack">
      <section className="results-card" aria-labelledby="results-title">
        <div className="section-heading compact"><div><span className="eyebrow">Med konsekvens</span><h2 id="results-title">Förväntade resultat</h2></div><TrendingUp /></div>
        <div className="result-timeline">
          <p><strong>2–4 veckor</strong><span>Bättre pump, fastare muskler och något fylligare axlar och armar.</span></p>
          <p><strong>6–8 veckor</strong><span>Tydligare muskler och ökad styrka.</span></p>
          <p><strong>3–6 månader</strong><span>En markant skillnad i överkroppens storlek och form.</span></p>
        </div>
        <p className="info-note"><Sparkles size={17} /> Resultaten varierar och kräver konsekvent träning, tillräckligt med mat och bra sömn.</p>
      </section>
      <details className="details-card" open>
        <summary><span><Lightbulb size={20} /> Praktiska kosttips</span></summary>
        <ul>{tips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
      </details>
      <section className="upgrade-card">
        <span className="eyebrow"><Moon size={15} /> Framtida uppgradering</span>
        <h2>Mer vikt slår fler tillskott</h2>
        <p>De två hantlarna på 7 kg fungerar bra för att komma igång, särskilt med långsamma repetitioner och träning nära failure. För fortsatt utveckling är justerbara hantlar på upp till cirka 20–25 kg per hantel en bättre långsiktig investering än fler kosttillskott.</p>
      </section>
    </div>
  )
}
