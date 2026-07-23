import { Beef, Flame, Info, Pill } from 'lucide-react'
import { nutritionByDay } from '../data/meals'
import type { AppData, DayId } from '../types'

export function NutritionTargets({ data, dayId }: { data: AppData; dayId: DayId }) {
  const day = nutritionByDay[dayId]
  const consumed = day.meals.filter((meal) => data.completedMeals[`${day.id}:${meal.id}`]).reduce((sum, meal) => sum + meal.protein, 0)
  const remaining = Math.max(0, 140 - consumed)
  const progress = Math.min(100, Math.round((consumed / 140) * 100))

  return (
    <section aria-labelledby="nutrition-targets-title">
      <div className="section-heading"><div><span className="eyebrow">Din riktning</span><h2 id="nutrition-targets-title">Näringsmål</h2></div></div>
      <div className="target-grid">
        <article><Beef /><span>Protein</span><strong>140–160 g</strong><small>per dag</small></article>
        <article><Flame /><span>Energi</span><strong>2 700–2 900</strong><small>kcal per dag</small></article>
        <article><Beef /><span>Proteinshake</span><strong>≈ 60 g</strong><small>protein per dag</small></article>
        <article><Pill /><span>Kreatin</span><strong>5 g</strong><small>valfritt per dag</small></article>
      </div>
      <article className="protein-counter">
        <div className="protein-counter-top"><div><span className="eyebrow">{day.name}</span><h3>Proteinräknare</h3></div><strong>{consumed} g</strong></div>
        <div className="progress-track" role="progressbar" aria-label="Uppskattat protein idag" aria-valuemin={0} aria-valuemax={140} aria-valuenow={Math.min(consumed, 140)}><span style={{ width: `${progress}%` }} /></div>
        <p>{remaining > 0 ? <><b>Cirka {remaining} g</b> återstår till ditt lägsta dagsmål.</> : <><b>Proteinmålet är nått.</b> Bra jobbat!</>}</p>
      </article>
      <article className="portion-guide">
        <h3>Snabb portionsguide</h3>
        <div>
          <p><strong>250 g kycklinglårfilé</strong><span>≈ 45–50 g protein</span></p>
          <p><strong>1 burk tonfisk, 150 g avrunnen</strong><span>≈ 35 g protein</span></p>
          <p><strong>250 g kvarg</strong><span>≈ 25 g protein</span></p>
          <p><strong>4 ägg</strong><span>≈ 28 g protein</span></p>
          <p><strong>250 g kokta linser</strong><span>≈ 20 g protein</span></p>
          <p><strong>200 g nötfärs</strong><span>≈ 40 g protein</span></p>
        </div>
      </article>
      <p className="info-note"><Info size={17} /> Värdena är uppskattningar och varierar mellan produkter. Måltidsplanen kan hamna över 160 g om allt markeras; justera i första hand mängden shake eller kvarg efter ditt faktiska behov och din viktutveckling.</p>
    </section>
  )
}
