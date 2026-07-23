import { nutritionByDay } from '../data/meals'
import type { AppData, DayId } from '../types'
import { MealCard } from './MealCard'

interface Props { dayId: DayId; data: AppData; onToggleMeal: (mealId: string) => void }

export function NutritionDay({ dayId, data, onToggleMeal }: Props) {
  const day = nutritionByDay[dayId]
  const completed = day.meals.filter((meal) => data.completedMeals[`${day.id}:${meal.id}`]).length
  return (
    <section aria-labelledby="menu-title">
      <div className="section-heading"><div><span className="eyebrow">{day.name}</span><h2 id="menu-title">Dagens meny</h2></div><span className="section-count">{completed}/{day.meals.length} måltider</span></div>
      <div className="meal-list">
        {day.meals.map((meal) => <MealCard key={meal.id} meal={meal} completed={Boolean(data.completedMeals[`${day.id}:${meal.id}`])} onToggle={() => onToggleMeal(meal.id)} />)}
      </div>
    </section>
  )
}
