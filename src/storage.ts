import { dayIds, type AppData, type DayId } from './types'

const STORAGE_KEY = 'workout4karo:data'
const VERSION = 1 as const

export function getCurrentDay(): DayId {
  const jsDay = new Date().getDay()
  return dayIds[jsDay === 0 ? 6 : jsDay - 1]
}

export function getWeekKey(date = new Date()): string {
  const monday = new Date(date)
  const offset = date.getDay() === 0 ? -6 : 1 - date.getDay()
  monday.setDate(date.getDate() + offset)
  const year = monday.getFullYear()
  const month = String(monday.getMonth() + 1).padStart(2, '0')
  const day = String(monday.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function createDefaultData(): AppData {
  const currentDay = getCurrentDay()
  return {
    version: VERSION,
    weekKey: getWeekKey(),
    selectedWorkoutDay: currentDay,
    selectedNutritionDay: currentDay,
    completedExercises: {},
    completedSets: {},
    notes: {},
    activities: {},
    completedMeals: {},
    completedRoutine: {},
    shoppingChecked: {},
    customShoppingItems: [],
    weights: [],
  }
}

function isDayId(value: unknown): value is DayId {
  return typeof value === 'string' && dayIds.includes(value as DayId)
}

function isRecord(value: unknown): value is Record<string, boolean> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function resetWeeklyData(data: AppData, weekKey = getWeekKey()): AppData {
  return {
    ...data,
    weekKey,
    completedExercises: {},
    completedSets: {},
    notes: {},
    activities: {},
    completedMeals: {},
    completedRoutine: {},
    shoppingChecked: {},
  }
}

export function loadData(): AppData {
  const fallback = createDefaultData()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return fallback
    const parsed = JSON.parse(raw) as Partial<AppData>
    if (parsed.version !== VERSION) return fallback
    const data: AppData = {
      ...fallback,
      ...parsed,
      selectedWorkoutDay: isDayId(parsed.selectedWorkoutDay) ? parsed.selectedWorkoutDay : fallback.selectedWorkoutDay,
      selectedNutritionDay: isDayId(parsed.selectedNutritionDay) ? parsed.selectedNutritionDay : fallback.selectedNutritionDay,
      completedExercises: isRecord(parsed.completedExercises) ? parsed.completedExercises : {},
      completedSets: isRecord(parsed.completedSets) ? parsed.completedSets : {},
      activities: isRecord(parsed.activities) ? parsed.activities : {},
      completedMeals: isRecord(parsed.completedMeals) ? parsed.completedMeals : {},
      completedRoutine: isRecord(parsed.completedRoutine) ? parsed.completedRoutine : {},
      shoppingChecked: isRecord(parsed.shoppingChecked) ? parsed.shoppingChecked : {},
      notes: typeof parsed.notes === 'object' && parsed.notes !== null ? parsed.notes : {},
      customShoppingItems: Array.isArray(parsed.customShoppingItems)
        ? parsed.customShoppingItems.filter((item) => item && typeof item.id === 'string' && typeof item.label === 'string')
        : [],
      weights: Array.isArray(parsed.weights)
        ? parsed.weights.filter((entry) => entry && typeof entry.id === 'string' && typeof entry.date === 'string' && typeof entry.weight === 'number')
        : [],
    }
    return data.weekKey === getWeekKey() ? data : resetWeeklyData(data)
  } catch {
    return fallback
  }
}

export function saveData(data: AppData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // Appen fortsätter fungera även om lagringsutrymmet är blockerat eller fullt.
  }
}
